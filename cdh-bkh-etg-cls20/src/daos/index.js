require("dotenv").config();

let productosDao;
let carritosDao;

switch (process.env.DAO) {
    case "Firebase":
        /* eslint-disable no-case-declarations,global-require */
        const ProductoDaoFirebase = require("./daos/productos/ProductoDaoFirabase");
        // const CarritoDaoFirebase = require("./daos/carrito/CarritoDaoFirabase");

        productosDao = new ProductoDaoFirebase();
        // carritosDao = new CarritoDaoFirebase();
        break;
    case "MongoDb":
        /* eslint-disable no-case-declarations,global-require */
        const ProductoDaoMongoDb = require("./daos/productos/ProductoDaoMongoDb");
        // const CarritoDaoMongoDb = require("./daos/carrito/CarritoDaoMongoDb");

        productosDao = new ProductoDaoMongoDb();
        // carritosDao = new CarritoDaoMongoDb();
        break;
    case "Json":
        /* eslint-disable no-case-declarations,global-require */
        const ProductoDaoArchivo = require("./producto.daos/ProductoDaosArchivo");
        const CarritoDaoArchivo = require("./carrito.daos/CarritoDaosArchivo");

        productosDao = new ProductoDaoArchivo("../data/producto.json");
        carritosDao = new CarritoDaoArchivo("../data/carrito.json");

        break;

    default:
        const ProductoDaoDefault = require("./producto.daos/ProductoDaosArchivo");
        // const CarritoDaoArchivo = require("./carrito.daos/CarritoDaosArchivo");

        productosDao = new ProductoDaoDefault("../data/producto.json");
    // carritosDao = new CarritoDaoArchivo("../data/carrito.json");
    // break;
}

module.exports = { productosDao, carritosDao };
