const mongoose = require("mongoose");
const regitrationModel = mongoose.Schema({
    "userName": {
        type: String,
        required: true
    },
    "userEmail": {
        type: String,
        required: true
    },
    "userPhone": {
        type: String,
        required: true
    },
    "userDegree": {
        type: String,
        required: true
    },
    "userBranch": {
        type: String,
        required: true
    },
    "IsProfessional": {
        type: Boolean,
        required: true
    },

});
const eaRegistrationCollection = mongoose.model("ea_registration", regitrationModel);


module.exports = eaRegistrationCollection