const mongoose = require("mongoose");
const mockModel = mongoose.Schema({
    "testID": {
        type: Number,
        required: true
    },
    "testImg": {
        type: String,
        required: true
    },
    "testName": {
        type: String,
        required: true
    },
    "testCategory": {
        type: String,
        required: true
    },
    "testPrice": {
        type: Number,
        required: true
    },

});
const mocktestCollection = mongoose.model("mocktest", mockModel);

module.exports = mocktestCollection;