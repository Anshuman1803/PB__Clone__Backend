const route = require("express").Router();
const { userLogin, userRegister } = require("../controller/userController");



route.post("/register", userRegister);
route.post("/login", userLogin);

module.exports = route