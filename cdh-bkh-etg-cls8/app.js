/* ===========================================================================
   Cls 04
   6. Router & Multer
   Entrega:04 Cls:08
   ============================================================================ */

/*
   Servidor Express
   ========================================================================== */

/* requerimos express */
const express = require("express");
const logger = require("morgan");
const indexRouter = require("./src/routes/index");
const path = require("path");
const errorMidadleware = require("./src/middlewares/errorMidadleware");
/* requerimos dotenv para poder las variables de entorno */
require("dotenv").config();

// Creamos nuestra app
const app = express();

/* app
========================================================================== */

// agregamos función de middleware,analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
app.use(express.json());

// método que se llama como middleware para reconocer el objeto de solicitud entrante como cadenas o matrices
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// app.use('/public',express.static("public"));
app.use(express.static(path.join(__dirname, "./public")));

// le decimos a nuestro servidor que despues de /api me agregue todas las rutas que estan adentro del index.js dentro de routes
app.use("/api", indexRouter);
app.use(errorMidadleware);
module.exports = app;
