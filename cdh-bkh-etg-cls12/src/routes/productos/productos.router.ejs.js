// Import externas
const express = require("express");

// requiemos router para empezar a trabajar
const router = express.Router();

/* requerimos nuestro contenedor con nuestros metodos */
const Contenedor = require("../../services/contenedor");

const contenedor = new Contenedor("./productos.txt");

router.get("/productos", async (_req, res, next) => {
    try {
        const productosAll = await contenedor.getAll();

        if (productosAll.length > 0) {
            res.status(200).render("productosViewsEjs", {
                title: "Nuestros Productos EJS",
                msg: productosAll,
                listExits: true

            });
        } else {
            res.status(200).render("productosViewsEjs", {
                title: "Nuestros Productos EJS",
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
        res.status(200).redirect("/indexEjs.html");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
