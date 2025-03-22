require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

const connectToDB = async () => {
    try {
        if (!url) {
            console.error(" MongoDB URL is missing in environment variables!");
            process.exit(1);
        };

        await mongoose.connect(url);
        console.log("connected to DB successfully");
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectToDB;
