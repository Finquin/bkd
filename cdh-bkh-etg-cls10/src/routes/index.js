/* ==============================================================
   Administracion de rutas
================================================================= */

const express = require("express");

// requiemos router para empezar a trabajar
const router = express.Router();

/* requerimos nuestro route de mascotas */

const productosRouter = require("./productos/productos.router");
const productosRouterHbs = require("./productos/productos.router.hbs");
const productosRouterPug = require("./productos/productos.router.pug");
const productosRouterEjs = require("./productos/productos.router.ejs");

/*  Escuchamos una peticion get en la ruta raiz */
/* Si req no lo usamos le ponemos el signo _ */
/* eslint-disable indent */
router.get("/health", async (_req, res) => {
    res.status(200).json({
        success: true,
        health: "up",
        enviroment: process.env.ENVIROMENT || "not found"
    });
});

router.use("/productos", productosRouter);
router.use("/hbs", productosRouterHbs);
router.use("/pug", productosRouterPug);
router.use("/ejs", productosRouterEjs);

module.exports = router;
