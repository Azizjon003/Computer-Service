const express = require("express");
const app = express();

app.use(express.json());

const vacancyRouter = require("../routes/vacancyRouter");
const locationRouter = require("../routes/locationRouter");
const userRouter = require("../routes/userRouter");
const vacancyCategories = require("../routes/vacancyCategoryRouter");

app.use("/api/v1/vacancy", vacancyRouter);
app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/vacancyCategories", vacancyCategories);

module.exports = app;
