const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
const JWT = require("jsonwebtoken");
dotENV.config();
const KEY = process.env.secretKey;
const registredUserCollection = require("../model/userModel");
const saltRound = 10;

const userLogin = async (request, response) => {
    const tempUser = request.body;
    let findUser = await registredUserCollection.find({ userEmail: { $eq: tempUser.userEmail } });

    if (findUser.length === 0) {
        return response.send({ resMsg: "Sorry, You are not registered with us. Please register." });
    }
    const userAuthenticaticated = bcrypt.compareSync(tempUser.userPassword, findUser[0].userPassword);

    if (userAuthenticaticated) {
        const generatedToken = JWT.sign({ "USER": tempUser.userEmail }, KEY, { expiresIn: "9000" });
        return response.send({ "Your_TOKEN": generatedToken, "UserDetails": findUser });

    } else {
        return response.send({ resMsg: "Incorrect Credentials. Please try again" });
    }
}

const userRegister = async (request, response) => {
    let tempUser = request.body;
    let IsRegistred = await registredUserCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });

    if (IsRegistred) {
        return response.send({ "resMsg": "Email already registered. Please login" });
    } else {

        //hashing password using bcrypt
        tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

        // saving new user in database
        const registredResult = await registredUserCollection.create(tempUser);
        if (registredResult) {
            // generating JWT token for every new user who try to registred with our website
            const generatedToken = JWT.sign({ "USER": tempUser.userEmail }, KEY);

            // sending response back to client 
            return response.send({ resMsg: "Registred Successfully.", "Your_TOKEN": generatedToken,"userDetails" : registredResult });
        } else {
            return response.send({ resMsg: "Something Went Wrong, Try Again" });
        }

    }
}

module.exports = { userLogin, userRegister }