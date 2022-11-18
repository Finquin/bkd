const fs = require("fs");

class ServicesCarrito {
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
        console.log(`El carrito tiene el ID: ${idProduct}`);
        return idProduct;
      } else {
        await fs.promises.writeFile(this.ruta, JSON.stringify([{ id: 1, timestamp, ...obj }], null, 2));
        console.log("El carrito tiene el ID: 1");
        return 1;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToCart(idCart, product) {
    try {
      const carritoById = await this.getById(parseInt(idCart));
      const timestamp = Date.now();
      if (carritoById.products.length) {
        const productToAdd = { id: carritoById.products[carritoById.products.length - 1].id + 1, timestamp, ...product };
        carritoById.products.push(productToAdd);
        await this.updateById(parseInt(idCart), carritoById);
        const idProduct = carritoById.products[carritoById.products.length - 1].id;
        console.log(`El producto agregado tiene el ID: ${idProduct}`);
        return idProduct;
      } else {
        const productToAdd = { id: 1, timestamp, ...product };
        carritoById.products.push(productToAdd);
        await this.updateById(parseInt(idCart), carritoById);

        console.log("El producto agregado tiene el ID: 1");
        return 1;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const dataArch = await fs.promises.readFile(this.ruta, "utf8");
      const dataArchParse = JSON.parse(dataArch);

      const carrito = dataArchParse.find(carrito => carrito.id === id);
      if (carrito) {
        console.log(carrito);
        return carrito;
      } else {
        console.log("El carrito no existe");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const dataArch = await fs.promises.readFile(this.ruta, "utf8");
      const dataArchParse = JSON.parse(dataArch);
      if (dataArchParse.length) {
        return dataArchParse;
      } else {
        console.log("No hay Carritos");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateById(id, carrito) {
    carrito.id = id;

    try {
      const carritos = await this.getAll();
      const index = carritos.findIndex(obj => obj.id === id);
      if (index !== -1) {
        carritos[index] = carrito;
        await fs.promises.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
        return { mensaje: "Carrito actualizado" };
      } else {
        return { mensaje: "Carrito no encontrado" };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const dataArch = await fs.promises.readFile(this.ruta, "utf8");
      const dataArchParse = JSON.parse(dataArch);
      const carrito = dataArchParse.find(carrito => carrito.id === id);
      if (carrito) {
        const dataArchParseFiltered = dataArchParse.filter(carrito => carrito.id !== id);
        await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchParseFiltered, null, 2));
        console.log("Carrito Eliminado");
      } else {
        console.log("No se encontró el Carrito");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProductById(idCart, idProduct) {
    try {
      const dataArch = await fs.promises.readFile(this.ruta, "utf8");
      const dataArchParse = JSON.parse(dataArch);
      const carrito = dataArchParse.find(carrito => carrito.id === idCart);
      const product = carrito.products.find(product => product.id === idProduct);
      console.log(product);
      if (product) {
        const productosFiltrados = carrito.products.filter(product => product.id !== idProduct);
        carrito.products = productosFiltrados;
        this.updateById(idCart, carrito);
        console.log("Producto Eliminado");
      } else {
        console.log("No se encontró el Producto");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ServicesCarrito;
