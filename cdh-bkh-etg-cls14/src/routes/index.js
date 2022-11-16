/* ==============================================================
   Administracion de rutas
================================================================= */

const express = require("express");
const path = require("path");
// requiemos router para empezar a trabajar
const router = express.Router();

/* requerimos nuestro route de mascotas */

const prodsRouter = require("./productos/prods.router");
const prodsRouterHbs = require("./productos/prods.router.hbs");
const prodsRouterPug = require("./productos/prods.router.pug");
const prodsRouterEjs = require("./productos/prods.router.ejs");
const prodsRouterEntrgUno = require("./productos/prods.router.entrg_uno");

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

router.get("/", async (_req, res, next) => {
    try {
        const path3 = path.join(__dirname, "../../");
        res.status(200).sendFile(path.join(path3, "/public/pages/indexPrimerEntrega.html"));
    } catch (err) {
        next(err);
    }
});

router.use("/productos", prodsRouter);
router.use("/hbs", prodsRouterHbs);
router.use("/pug", prodsRouterPug);
router.use("/ejs", prodsRouterEjs);
router.use("/unoentgr", prodsRouterEntrgUno);

module.exports = router;
