const dotenv = require("dotenv").config("");
const app = require("./middlewares/app");
const cli = require("cli-color");
const express = require("express");

const PORT = process.env.PORT || 8000;
<<<<<<< HEAD
require("./configs/db");
const { json } = require("body-parser");
=======
const DB = require("./configs/db");

DB.sync();
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
