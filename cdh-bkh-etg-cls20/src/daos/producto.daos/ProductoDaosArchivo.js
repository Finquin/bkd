
console.log("Hello World".blue);

const path = require("path");
const { ServicesArchivos } = require("../../services/servicesArchivos");

class ProductoDaosArchivo extends ServicesArchivos {
    constructor() {
        super(path.join(__dirname, "../../data", "productos.json"));
        console.log("\x1b[2m", "\x1b[31m", "\x1b[44m", "Archivo Productos: base de datos  conectada", "\x1b[0m");
    }
}

module.exports = ProductoDaosArchivo;
