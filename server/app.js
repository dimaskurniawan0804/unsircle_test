"use strict";
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT

const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
    console.log("App listening to port: " + port);
});

// module.exports = app;
