const path = require("path");
const { ServicesArchivos } = require("../../services/servicesArchivos");

class CarritoDaosArchivo extends ServicesArchivos {
    constructor() {
        super(path.join(__dirname, "../../data", "carrito.json"));
        console.log("\x1b[2m", "\x1b[31m", "\x1b[44m", "Archivo Carrito: base de datos  conectada", "\x1b[0m");
    }
}

module.exports = CarritoDaosArchivo;
