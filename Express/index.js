const express = require("express");
const app = express();
const restaurantRouter = require("./Routes/restaurantRoutes");
const requestTimeOfHit = require("./Middlewares/requestTimeOfHit");
app.use(express.json());
// middleware
app.use(requestTimeOfHit);

app.use("/api/v1/restaurant", restaurantRouter);

module.exports = app;
