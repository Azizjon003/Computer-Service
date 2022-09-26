const express = require("express");
const app = express();

app.use(express.json());

const vacancyCategories = require("../routes/vacancyCategoryRouter");
const vacancyRouter = require("../routes/vacancyRouter");
const serviceRouter = require("../routes/serviceRouter");
const locationRouter = require("../routes/locationRouter");
const userRouter = require("../routes/userRouter");
const submitVacancy = require("../routes/submitVacancyRouter");
const workers = require("../routes/workerRouter");
const serviseType = require("../routes/serviceTypeRouter");
const workerReview = require("../routes/workerReview");
const serviceTypeReview = require("../routes/serviceTypeReview");
const brands = require("../routes/brandsRouter");
const productCategory = require("../routes/productCategoryRouter");
const sales = require("../routes/salesRouter");
const productDetails = require("../routes/productDetailsRouter");
const product = require("../routes/productRouter");
const productReview = require("../routes/productReview");

app.use("/api/v1/vacancyCategories", vacancyCategories);
app.use("/api/v1/vacancy", vacancyRouter);
app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/submitVacancy", submitVacancy);
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/workers", workers);
app.use("/api/v1/serviceTypes", serviseType);
app.use("/api/v1/reviewWorkers", workerReview);
app.use("/api/v1/reviewServiceType", serviceTypeReview);
app.use("/api/v1/brands", brands);
app.use("/api/v1/productCategories", productCategory);
app.use("/api/v1/sales", sales);
app.use("/api/v1/productDetails", productDetails);
app.use("/api/v1/products", product);
app.use("/api/v1/productReviews", productReview);

module.exports = app;
