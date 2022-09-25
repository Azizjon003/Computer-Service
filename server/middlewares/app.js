const express = require("express");
const app = express();

app.use(express.json());

const vacancyCategories = require("../routes/vacancyCategoryRouter");
const vacancyRouter = require("../routes/vacancyRouter");
const serviceRouter = require("../routes/serviceRouter");
// const locationRouter = require("../routes/locationRouter");
const userRouter = require("../routes/userRouter");
const submitVacancy = require("../routes/submitVacancyRouter");
// const review = require("../routes/reviewRouter");
const workers = require("../routes/workerRouter");
const serviseType = require("../routes/serviceTypeRouter");

app.use("/api/v1/vacancyCategories", vacancyCategories);
app.use("/api/v1/vacancy", vacancyRouter);
// app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/submitVacancy", submitVacancy);
app.use("/api/v1/services", serviceRouter);
// app.use("/api/v1/reviews", review);
app.use("/api/v1/workers", workers);
app.use("/api/v1/serviceTypes", serviseType);

module.exports = app;
