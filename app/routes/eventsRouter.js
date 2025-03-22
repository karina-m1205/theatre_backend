const express = require("express");
const router = express.Router();
const EventsServices = require("../services/eventsServices.js");

router.get("/", async (req, res) => {
    try {
        const eventType = req.query;
        const events = await EventsServices.getEvents(eventType);
        return res.status(200).send(events);
    } catch (err) {
        return res.status(500).send(err.message);
    };
});

router.post("/", async (req, res) => {
    try {
        const eventData = req.body;
        if (!eventData) {
            return res.status(400).send("no event to save");
        };
        const savedEvent = await EventsServices.postEvents(eventData);
        return res.status(200).send(savedEvent);
    } catch (err) {
        return res.status(500).send(err.message);
    };
});

module.exports = router;
