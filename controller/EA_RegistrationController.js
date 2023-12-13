
const eaRegistrationCollection = require("../model/EA_registration")
const EA_Contoller = async (request, response)=>{
    let tempUser = request.body;
    let IsRegistred = await eaRegistrationCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });



    if (IsRegistred) {
        return response.send({ "resMsg": "Email already registered" });
    } else {


        // saving new user in database
        const registredResult = await eaRegistrationCollection.create(tempUser);
        if (registredResult) {
          
            return response.send({ resMsg: "Registred Successfully"});
        } else {
            return response.send({ resMsg: "Something Went Wrong, Try Again" });
        }

    }
}
module.exports = {EA_Contoller}