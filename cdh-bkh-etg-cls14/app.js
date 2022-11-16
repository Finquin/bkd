/* ================================
   Cls 14
   Webpacks
   Entrega:06 Cls:14
   ================================= */

/*
   Servidor Express
   ================================== */

const express = require("express");/* [1] */
const logger = require("morgan");/* [2] */
const indexRouter = require("./src/routes/index");/* [3] */
const path = require("path");
const errorMidadleware = require("./src/middlewares/errorMidadleware");
// Requerimos el metodo create de hbs
const { create } = require("express-handlebars");

/* requerimos dotenv para poder las variables de entorno */
require("dotenv").config();

/** Inicializamos la  API con Express */
// Creamos nuestra app
const app = express();
// Creamos nuestra configuracion hbs
const hbs = create({
   extname: ".hbs"
   // defaultLayout: "main.hbs",
   // layoutsDir: __dirname + "/views/layouts"

});

/* app
==================================================================== */

// agregamos función de middleware,analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
app.use(express.json());

// método que se llama como middleware para reconocer el objeto de solicitud entrante como cadenas o matrices
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static("public"));

// app.use("/public", express.static("/public"));
// app.use(express.static(path.join(__dirname, "./public")));
// // app.use("/public", express.static(__dirname + "/public"));
// app.use("/public/pages", express.static(path.join(__dirname, "./public/pages")));

// le decimos a nuestro servidor que despues de /api me agregue todas las rutas que estan adentro del index.js dentro de routes
app.use("/api", indexRouter);
app.use(errorMidadleware);

app.engine("hbs", hbs.engine);

const selectTempleter = process.env.TEMPLATE;

app.set("view engine", `${selectTempleter}`);
app.set("views", `./src/views/${selectTempleter}/`);

module.exports = app;
