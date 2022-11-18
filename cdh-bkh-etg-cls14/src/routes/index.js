/* ==============================================================
   Administracion de rutas
================================================================= */

const express = require("express");
const path = require("path");
// requiemos router para empezar a trabajar
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
