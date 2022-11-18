
const express = require("express");/* [1] */
const logger = require("morgan");/* [2] */
const indexRouter = require("./src/routes/index");/* [3] */

const errorMidadleware = require("./src/middlewares/errorMidadleware");

require("dotenv").config();

/** Inicializamos la  API con Express */
// Creamos nuestra app
const app = express();

// agregamos función de middleware,analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static("public"));

app.use("/api", indexRouter);
app.use(errorMidadleware);

module.exports = app;
