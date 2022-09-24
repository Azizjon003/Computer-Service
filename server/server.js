const dotenv = require("dotenv").config("");
const app = require("./middlewares/app");
const express = require("express");

const PORT = process.env.PORT || 8000;
const DB = require("./configs/db");

const a = require("./models/vacancyModel");
const { json } = require("body-parser");

DB.sync();

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
