const Events = require("../models/eventsModel.js");

class EventsServices {
    static async getEvents(type) {
        try {
            const events = await Events.find(type);
            return events;
        } catch (err) {
            throw err;
        };
    };

    static async postEvents(data) {
        try {
            const eventTitle = data.title;
            const foundEvent = await Events.findOne({ title: eventTitle });
            if (foundEvent) {
                throw new Error("event already exist");
            };

            const newEvent = new Events(data);
            await newEvent.save();
            return newEvent;
        } catch (err) {
            throw err;
        };
    };

    static async deleteEvent(id) {
        try {
            const deletedEvent = await Events.findByIdAndDelete(id);
            if (!deletedEvent) {
                throw new Error("event not found");
            };

            return deletedEvent;
        } catch (err) {
            throw err;
        };
    };
};

module.exports = EventsServices;