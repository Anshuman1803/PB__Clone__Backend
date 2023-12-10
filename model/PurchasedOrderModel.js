const mongoose = require("mongoose");
const orderModel = mongoose.Schema({
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
    "testDate": {
        type: String
    }

});
const purchasedOrderCollection = mongoose.model("purchasedOrder", orderModel);

module.exports = purchasedOrderCollection;