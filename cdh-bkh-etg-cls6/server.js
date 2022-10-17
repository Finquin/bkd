/* ===========================================================================
   Cls 06
   6. Servidores Web
   Entrega:03 Cls:06
   ============================================================================ */

/*
   Servidor Express
   ========================================================================== */

/* requerimos express */
const express = require("express");

/* requerimos dotenv para poder las variables de entorno */
require("dotenv").config();

// Creamos nuestra app
const app = express();

/* requerimos nuestro contenedor con nuestros metodos */
const Contenedor = require("./contenedor");

/*
 * Creamos contenedor hacemos referencia para instanciar la clase Contenedor
 * y pásamos por parametro la ruta de nuestro archivo
 * productos.txt.
*/
const contenedor = new Contenedor("./productos.txt");

/* app
========================================================================== */

/*  Escuchamos una peticion get en la ruta raiz */
/* Si req no lo usamos le ponemos el signo _ */
/* eslint-disable indent */
app.get("/", async (_req, res) => {
   res.status(200).send(`<h1>Bienvenido peticion GET</h1>
   <p>puede seleccionar la ruta productos para ver todos los productos </p>
   <p>puede seleccionar la ruta productoRandom para ver un producto al azar </p>`);
});

/*  Escuchamos una peticion get en la ruta productos */
/* eslint-disable indent */
app.get("/productos", async (_req, res) => {
   const productosAll = await contenedor.getAll();
   res.status(200).send(productosAll);
});

/*  Escuchamos una peticion get en la ruta productoRandom */
/* eslint-disable indent */
app.get("/productoRandom", async (_req, res) => {
   /* traemos todo los productos */
   const productosAll = await contenedor.getAll();
   /* determinamos la cantidad de productos que hay */
   const productosMax = productosAll.length;
   /* calculamos un producto al azar entre 1 y  el maximo de productos */
   const productoIdRandon = Math.floor(Math.random() * (productosMax + 1 - 1)) + 1;
   /* llamamos a nuestro metodo y traemos nuestro producto por id */
   const productoRandon = await contenedor.getById(productoIdRandon);
   res.status(200).send(productoRandon);
});

/* llamamos a la variable de entorno env.PORT */
const PORT = process.env.PORT || 3000;

/* Le indicamos donde tiene que escuchar nuestro servidor */
app.listen(PORT, () => {
   console.info(`server running in port ${PORT}`);
});
