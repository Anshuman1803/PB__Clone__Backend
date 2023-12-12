const mongoose = require("mongoose");
const projectModel = mongoose.Schema({
    "project_id": {
        type: Number,
        require: true
    },
    "project_title": {
        type: String,
        require: true
    }
    ,
    "project_poster": {
        type: String,
        require: true
    },
    "project_topics": {
        type: Array,
        require: true
    },
    "project_desc": {
        type: String,
        require: true
    },
    "project_Category": {
        type: String,
        require: true
    },
    "project_link": {
        type: String,
        require: true
    }
});
const ProjectCollection = mongoose.model("Project", projectModel);

module.exports = ProjectCollection;