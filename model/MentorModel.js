const mongoose = require("mongoose");
const mentorModel = mongoose.Schema({
    "mentorID": {
        type: Number,
        required: true
    },
    "mentorName": {
        type: String,
        required: true
    },
    "mentorPost": {
        type: String,
        required: true
    },
    "mentorPfoile": {
        type: String,
        required: true
    }, 
    "mentorCoverPoster": {
        type: String,
        required: true
    }, 
    "mentorDesc": {
        type: String,
        required: true
    }, 
    "mentorCompanyPoster": {
        type: String,
        required: true
    },

});
const mentorCollection = mongoose.model("Mentors", mentorModel);


module.exports = mentorCollection