// Import externas
const express = require("express");

// requiemos router para empezar a trabajar
const router = express.Router();

/* requerimos nuestro contenedor con nuestros metodos */
const Contenedor = require("../../services/contenedor");

/*
 * Creamos contenedor hacemos referencia para instanciar la clase Contenedor
 * y pásamos por parametro la ruta de nuestro archivo
 * productos.txt.
*/
const contenedor = new Contenedor("./productos.txt");

router.get("/", async (_req, res, next) => {
    try {
        const productosAll = await contenedor.getAll();
        res.status(200).json({
            success: true,
            msg: productosAll
        });
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        /* destructuramos el id que enviamos en :id */
        const { id } = req.params;
        /* llamamos a nuestro metodo y traemos nuestro producto por id */
        const productosSelect = await contenedor.getById(parseInt(id));
        res.status(200).json({
            success: true,
            msg: productosSelect
        });
    } catch (err) {
        next(err);
    }
});

/*  Escuchamos una peticion get en la ruta productoRandom */
/* eslint-disable indent */
router.get("/productoRandom", async (_req, res, next) => {
    try {
        /* traemos todo los productos */
        const productosAll = await contenedor.getAll();
        /* determinamos la cantidad de productos que hay */
        const productosMax = productosAll.length;
        /* calculamos un producto al azar entre 1 y  el maximo de productos */
        const productoIdRandon = Math.floor(Math.random() * (productosMax + 1 - 1)) + 1;

        /*
        *alternatica mas optima para el producto randon
        *const productoIdRandon = productosAll[Math.floor(Math.random()*productosAll.length)]
        */

        /* llamamos a nuestro metodo y traemos nuestro producto por id */
        const productoRandon = await contenedor.getById(productoIdRandon);
        res.status(200).json({
            success: true,
            msg: productoRandon
        });
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { body } = req;

        const postProduct = await contenedor.save(body);
        res.status(200).json({
            success: true,
            msg: postProduct
        });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        /* destructuramos el id que enviamos en :id */
        const { id } = req.params;
        /* llamamos a nuestro metodo y traemos nuestro producto por id */
        const deleteProduct = await contenedor.deleteById(parseInt(id));
        res.status(200).json({
            success: true,
            msg: deleteProduct
        });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        /* destructuramos el id que enviamos en :id */
        const { id } = req.params;
        const objProducto = req.body;

        await contenedor.updateById({ id: parseInt(id), ...objProducto });
        res.status(200).json({
            success: true,
            msg: "producto actualizado"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
