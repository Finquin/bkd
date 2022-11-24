/* ====================================
   INICIO APP
   ==================================== */

/*
* 1)-Cargamos el módulo externo 'express'
* 2)-Middleware morgan de registro de solicitudes HTTP para node.js
* 3)-Usamos dotenv herramienta externa para manejar las variables de entorno
* 4)-Cargamos el archivo donde manejamos las rutas
* 5)-Middleware creamos para pruebas de Middleware
* 6)-Crea un objeto de módulo express sobre el que se aplicarán diferentes métodos como get, set, post, use, etc.
*/

const express = require("express");/* [1] */
const logger = require("morgan");/* [2] */
require("dotenv").config();/* [3] */
const indexRouter = require("./src/routes/index");/* [4] */
const errorMidadleware = require("./src/middlewares/errorMidadleware");/* [5] */
const app = express();/* [6] */

/*
* 7)-Agregamos función de middleware,analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
* 8)-Middleware se usa solo para analizar el cuerpo de la solicitud del tipo de content-type x-www-form-urlencoded
* 9)-Usamos el Middleware Morgan y el parametro "dev"
* 10)-MiddlewareLo para servir archivos estáticos como imágenes, archivos CSS,js,html
* 11)-Usamos nuestro middlewarelo enrutador
* 12)-Usamos nuestro middlewarelo de pruebas
*/

app.use(express.json()); /* [7] */
app.use(express.urlencoded({ extended: true }));/* [8] */
app.use(logger("dev"));/* [9] */
app.use(express.static("public"));/* [10] */
app.use("/api", indexRouter);/* [11] */
app.use(errorMidadleware);/* [12] */

module.exports = app;
