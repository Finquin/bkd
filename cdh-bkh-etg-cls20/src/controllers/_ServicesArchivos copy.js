
const fs = require("fs");

class ServicesArchivos {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    try {
      const dataArch = await fs.promises.readFile(this.ruta, "utf8");
      const dataArchParse = JSON.parse(dataArch);
      const timestamp = Date.now();
      if (dataArchParse.length) {
        await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchParse, { id: dataArchParse[dataArchParse.length - 1].id + 1, timestamp, ...obj }], null, 2));
        const idProduct = dataArchParse[dataArchParse.length - 1].id + 1;
        console.log(`El producto tiene el ID: ${idProduct}`);
        return idProduct;
      } else {
        await fs.promises.writeFile(this.ruta, JSON.stringify([{ id: 1, timestamp, ...obj }], null, 2));
        console.log("El producto tiene el ID: 1");
        return 1;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateById(id, product) {
    product.id = id;

    try {
      const products = await this.getAll();
      const index = products.findIndex(obj => obj.id === id);
      const timestamp = Date.now();
      if (index !== -1) {
        product.timestamp = timestamp;
        products[index] = product;
        await fs.promises.writeFile(this.ruta, JSON.stringify(products, null, 2));
        return { mensaje: "Producto actualizado" };
      } else {
        return { mensaje: "Producto no encontrado" };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), "utf8");
    console.log("Todos los productos se han eliminado");
  }
}

module.exports = ServicesArchivos;
