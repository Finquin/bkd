
/* Importing the express module. */
const express = require("express");

/* Creating a new router object. */
const router = express.Router();

/* Loading the environment variables from the .env file. */
require("dotenv").config();

/* Importing the functions from the ServicesArchivos.js file. */
const {
    getAll,
    getId,
    postSave,
    putId,
    deleteId,
    getAsterisco
} = require("../../controllers/productos.controllers");

/* A route middleware that is going to get all the products. */
router.get("/", getAll);

/* A route middleware that is going to get id the products.  */
router.get("/:id", getId);

/* Creating a new product. */
router.post("/", postSave);

/* Updating the product with the id that is passed in the url. */
router.put("/:id", putId);

/* Deleting the product with the id that is passed in the url. */
router.delete("/:id", deleteId);

// Rest of the routes
router.get("*", getAsterisco);

module.exports = router;
