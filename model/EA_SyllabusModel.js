const mongoose = require("mongoose");
const syllabusModel = mongoose.Schema({
    "syllabusID": {
        type: Number,
        required: true
    },

});
const syllabusCollection = mongoose.model("EA_Syllabus", syllabusModel);


module.exports = syllabusCollection