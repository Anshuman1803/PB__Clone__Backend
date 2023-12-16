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
    "testTitle": {
        type: String,
    },
    "testCategory": {
        type: String,
        required: true
    },
    "testPrice": {
        type: Number,
        required: true
    },
    "testDate": {
        type: String,
    },
    "testParticipants": {
        type: Number,
    },
    "testDurition": {
        type: Number,
    },
    "userEmail": {
        type: String
    }



});
const mocktestCollection = mongoose.model("mocktest", mockModel);
const purchasedOrderCollection = mongoose.model("purchasedOrder", mockModel);

module.exports = { mocktestCollection, purchasedOrderCollection };