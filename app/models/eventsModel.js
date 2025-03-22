const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique:true,
    },
    date: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    cover: {
        type: String,
        require: true,
        
    },
    composer: {
        type: String,
        require: true,
    },
});

const model = mongoose.model("events", eventsSchema);

module.exports = model;