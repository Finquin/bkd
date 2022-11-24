/* ====================================
   INDEX DE ROUTES
   ==================================== */

/*
* 1)-Cargamos el módulo externo 'express'
* 2)-Se utiliza para resolver una secuencia de segmentos de ruta en una ruta absoluta. Funciona procesando la secuencia de rutas de derecha a izquierda
* 3)-const router = express.Router();
*/

const express = require("express");/* [1] */
const path = require("path");/* [2] */

const router = express.Router();

/* requerimos nuestro route de mascotas */

const prodsRouter = require("./productos/prods.router");
const carritoRouter = require("./productos/carrito.router");

/* eslint-disable indent */
router.get("/health", async (_req, res) => {
    res.status(200).json({
        success: true,
        health: "up",
        enviroment: process.env.ENVIROMENT || "not found"
    });
});

router.get("/", async (_req, res, next) => {
    try {
        const path3 = path.join(__dirname, "../../");
        res.status(200).sendFile(path.join(path3, "/public/index.html"));
    } catch (err) {
        next(err);
    }
});

router.use("/productos", prodsRouter);
router.use("/carrito", carritoRouter);

module.exports = router;
