// Import externas
const express = require("express");

// requiemos router para empezar a trabajar
const router = express.Router();
require("dotenv").config();
const ServicesProductos = require("../../services/ServicesProductos");

/*
 * Creamos contenedor hacemos referencia para instanciar la clase Contenedor
 * y pásamos por parametro la ruta de nuestro archivo
 * productos.txt.
*/
const servicesProducto = new ServicesProductos("./src/data/productos.json");

router.get("/", async (req, res, next) => {
    try {
        const listaProductos = await servicesProducto.getAll();
        res.json(listaProductos);
    } catch (err) {
        next(err);
    }
});

// GET (Devuelve un producto según ID)

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const productoById = await servicesProducto.getById(parseInt(id));
        productoById
            ? res.json(productoById)
            : res.json({ error: "Producto no encontrado" });
    } catch (err) {
        next(err);
    }
});

// POST (Recibe y Agrega un producto)

router.post("/", async (req, res, next) => {
    try {
        if (process.env.ADMIN) {
            const idProduct = await servicesProducto.save(req.body);
            const productoById = await servicesProducto.getById(parseInt(idProduct));
            res.json(productoById);
        } else {
            res.json({
                error: -1,
                description: "Ruta api/productos, Método POST, No autorizado"
            });
        }
    } catch (err) {
        next(err);
    }
});

// PUT (Recibe y Actualiza un producto según su ID)

router.put("/:id", async (req, res, next) => {
    try {
        if (process.env.ADMIN) {
            const { id } = req.params;
            const respuesta = await servicesProducto.updateById(parseInt(id), req.body);
            res.json(respuesta);
        } else {
            res.json({
                error: -1,
                description: "Ruta api/productos/id, Método PUT, No autorizado"
            });
        }
    } catch (err) {
        next(err);
    }
});

// DELETE (Elimina un producto según su ID)

router.delete("/:id", async (req, res, next) => {
    try {
        if (process.env.ADMIN) {
            const { id } = req.params;
            await servicesProducto.deleteById(parseInt(id));
        } else {
            res.json({
                error: -1,
                description: "Ruta api/productos/id, Método DELETE, No autorizado"
            });
        }
    } catch (err) {
        next(err);
    }
});

// Rest of the routes

router.get("*", async (req, res, next) => {
    try {
        res.json({
            error: -2,
            description: "Ruta no implementada"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
