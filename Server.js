const {mongooseConnection} = require("./config/mongooseConnection")
const express = require("express");
const cors = require("cors");
const dotENV = require("dotenv");
const userRouter = require("./Router/userRouter")
dotENV.config();
const videoCollection = require("./model/videoTutModel")
const mocktestCollection =require("./model/MockTestModel")

const PORT__NUBMER = process.env.port;
const appServer = express();

appServer.use(express.json());
appServer.use(cors({
    origin: "*"
}));

appServer.use("/user", userRouter);

appServer.use("/video", async (request, response)=>{
    const videoData = await videoCollection.find({});
    return response.send(videoData)
})

appServer.use("/mocktest", async (request, response)=>{
    const mockData = await mocktestCollection.find();
    return response.send(mockData)
})


appServer.listen(PORT__NUBMER, async () => {
    try {
        await mongooseConnection();
        console.log(`SERVER STARED  : http://localhost:${PORT__NUBMER}`);
    } catch (err) {
        console.log(`SOMETHING WENT WRONG : ${err}`);
    }
});