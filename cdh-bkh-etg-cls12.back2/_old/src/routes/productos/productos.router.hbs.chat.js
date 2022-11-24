// Import externas
const express = require("express");

// requiemos router para empezar a trabajar
const router = express.Router();

/* requerimos nuestro contenedor con nuestros metodos */
const Contenedor = require("../../services/contenedor");

const contenedor = new Contenedor("./productos.json");

router.get("/", async (_req, res, next) => {
    try {
        const productosAll = await contenedor.getAll();

        res.status(200).render("formulario", {
            success: true,
            title: "WebChat",
            subtitle: "Lista de Productos",
            msg: productosAll,
            listExits: true
        });
    } catch (err) {
        next(err);
    }
});

router.get("/productos", async (_req, res, next) => {
    try {
        const productosAll = await contenedor.getAll();
        if (productosAll.length > 0) {
            res.status(200).render("productosViewsHbs", {
                title: "Nuestros Productos HBS",
                msg: productosAll,
                listExits: true

            });
        } else {
            res.status(200).render("productosViewsHbs", {
                title: "Nuestros Productos HBS",
                msg: "",
                listExits: false

            });
        }
    } catch (err) {
        next(err);
    }
});

router.post("/productos", async (req, res, next) => {
    try {
        const { body } = req;

        // eslint-disable-next-line no-unused-vars
        const postProduct = await contenedor.save(body);
        res.status(200).redirect("/api/webchat");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
