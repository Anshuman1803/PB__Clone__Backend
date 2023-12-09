const mongoose = require("mongoose");
const videoModel = mongoose.Schema({
    "videoPoster" :{
        type : String,
        required : true
    },
    "videoTitle" :{
        type : String,
        required : true
    },
    "videoDesc" :{
        type : String,
        required : true
    },
    "videoCount" :{
        type : String,
        required : true
    },
});
const videoCollection = mongoose.model("VideoLec", videoModel);

module.exports = videoCollection;