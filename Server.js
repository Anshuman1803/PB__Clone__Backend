const {mongooseConnection} = require("./config/mongooseConnection")
const express = require("express");
const cors = require("cors");
const dotENV = require("dotenv");
const userRouter = require("./Router/userRouter")
dotENV.config();


const PORT__NUBMER = process.env.port;
const appServer = express();

appServer.use(express.json());
appServer.use(cors({
    origin: "*"
}));

appServer.use("/user", userRouter)


appServer.listen(PORT__NUBMER, async () => {
    try {
        await mongooseConnection();
        console.log(`SERVER STARED  : http://localhost:${PORT__NUBMER}`);
    } catch (err) {
        console.log(`SOMETHING WENT WRONG : ${err}`);
    }
});