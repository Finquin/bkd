
const express = require("express");

const router = express.Router();

/* requerimos nuestro servicesCarrito con nuestros metodos */
const ServicesCarrito = require("../../services/ServicesCarrito");

const servicesCarrito = new ServicesCarrito("./src/data/carrito.json");

router.get("/", async (req, res, next) => {
    try {
        const productosAll = await servicesCarrito.getAll();

        res.status(200).json({ productosAll });
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const idCarrito = await servicesCarrito.save(req.body);
        res.json(idCarrito);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await servicesCarrito.deleteById(parseInt(id));
    } catch (err) {
        next(err);
    }
});

router.get("/:id/productos", async (req, res, next) => {
    try {
        const { id } = req.params;
        const carritoById = await servicesCarrito.getById(parseInt(id));
        const listaProductos = carritoById.products;
        res.json(listaProductos);
    } catch (err) {
        next(err);
    }
});

router.post("/:id/productos", async (req, res, next) => {
    try {
        const { id } = req.params;
        const productoParaAgregar = req.body;
        const carritoById = await servicesCarrito.addProductToCart(id, productoParaAgregar);
        res.json(carritoById);
    } catch (err) {
        next(err);
    }
});

// DELETE: '/:id/productos/:id_prod' (Eliminar un producto del carrito)

router.delete("/:idCart/productos/:idProduct", async (req, res, next) => {
    try {
        const { idCart, idProduct } = req.params;
        console.log(idCart, idProduct);
        await servicesCarrito.deleteProductById(parseInt(idCart), parseInt(idProduct));
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
