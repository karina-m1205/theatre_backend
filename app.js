require("dotenv").config();
const cors = require("cors");
const express = require("express");
const eventsRouter = require("./app/routes/eventsRouter.js");
const connectToDB = require("./app/config/db.js");

const app = express();
connectToDB();

app.use(cors());
app.use(express.json());
app.use("/events", eventsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}}`);
});
