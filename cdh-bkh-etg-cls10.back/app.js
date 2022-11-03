/* ===========================================================================
   Cls 10
   6. Router & Multer
   Entrega:05 Cls:10
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
// Requerimos el metodo create de hbs
const { create } = require("express-handlebars");
const Contenedor = require("./src/services/contenedor");
const contenedor = new Contenedor();

/* requerimos dotenv para poder las variables de entorno */
require("dotenv").config();

// Creamos nuestra app
const app = express();
// Creamos nuestra configuracion hbs
const hbs = create({
   extname: ".hbs"
   // defaultLayout: "main.hbs",
   // layoutsDir: __dirname + "/views/layouts"

});

/* app
========================================================================== */

// agregamos función de middleware,analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
app.use(express.json());

// método que se llama como middleware para reconocer el objeto de solicitud entrante como cadenas o matrices
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "./public")));

// le decimos a nuestro servidor que despues de /api me agregue todas las rutas que estan adentro del index.js dentro de routes
app.use("/api", indexRouter);
app.use(errorMidadleware);

app.engine("hbs", hbs.engine);

const templa = contenedor.readSelectTemplater;

app.set("view engine", `${templa}`);
app.set("views", `./src/views/${templa}/`);
module.exports = app;
