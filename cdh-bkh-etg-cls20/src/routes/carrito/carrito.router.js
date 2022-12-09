
const express = require("express");

const router = express.Router();

const {
    getAll,
    postCarr,
    deleteById,
    getById,
    postIdProductos,
    deleteIdCartProdIdProd,
    error
} = require("../../controllers/carrito.controllers");

router.get("/", getAll);

router.post("/", postCarr);

router.delete("/:id", deleteById);

router.get("/:id/productos", getById);

router.post("/:id/productos", postIdProductos);

router.delete("/:idCart/productos/:idProduct", deleteIdCartProdIdProd);

router.get("*", error);

module.exports = router;
