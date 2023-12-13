const { mongooseConnection } = require("./config/mongooseConnection")
const express = require("express");
const cors = require("cors");
const dotENV = require("dotenv");
const userRouter = require("./Router/userRouter")
dotENV.config();
const videoCollection = require("./model/videoTutModel")
const projectCollection = require("./model/ProjectModel")
const {mocktestCollection, purchasedOrderCollection} = require("./model/MockTestModel");
const {EA_Contoller} = require("./controller/EA_RegistrationController")
const syllabusCollection = require("./model/EA_SyllabusModel")

const PORT__NUBMER = process.env.port;
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

const appServer = express();

appServer.use(express.json());
appServer.use(cors({
    origin: "*"
}));

appServer.use("/user", userRouter);
appServer.post("/EA_registration", EA_Contoller);

appServer.use("/video", async (request, response) => {
    const videoData = await videoCollection.find({});
    return response.send(videoData)
})

appServer.use("/mocktest", async (request, response) => {
    const mockData = await mocktestCollection.find();
    return response.send(mockData)
});

appServer.post("/storeData", async (request, response) => {
    const currentOrder = request.body;
    await purchasedOrderCollection.create(currentOrder);
    return response.send("Order Saved");
});


appServer.get("/getTestdata", async (request, response) => {
    const PurchasedTests = await purchasedOrderCollection.find({});
    return response.send(PurchasedTests);
})

appServer.get("/getSyllabus", async (request, response) => {
    const syllabus = await syllabusCollection.find({});
    return response.send(syllabus);
})

appServer.get("/project/:topic", async(request, response)=>{
    const topic = request.params.topic;
    const data = await projectCollection.find({"project_Category" : topic});
    return response.send(data)
    console.log(topic)
})

const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
            PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
        ).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};


const createOrder = async ({ cart, cartTotalAmount }) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    // this ammound will be changed
                    currency_code: "USD",
                    value: cartTotalAmount,
                },
            },
        ],
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });
    return handleResponse(response);
};


async function handleResponse(response) {
    try {
        const jsonResponse = await response.json();
        return {
            jsonResponse,
            httpStatusCode: response.status,
        };
    } catch (err) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

appServer.post("/api/orders", async (req, res) => {
    try {
        const { cart, cartTotalAmount } = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder({ cart, cartTotalAmount });
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});


appServer.listen(PORT__NUBMER, async () => {
    try {
        await mongooseConnection();
        console.log(`SERVER STARED  : http://localhost:${PORT__NUBMER}`);
    } catch (err) {
        console.log(`SOMETHING WENT WRONG : ${err}`);
    }
});