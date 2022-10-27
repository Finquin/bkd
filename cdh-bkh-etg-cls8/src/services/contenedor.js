/* =========================================================================
   class constructor
   ========================================================================== */

/* requerimos el Filesystem (fs) de node */
const fs = require("fs").promises;

/* pasamos la ruta donde aplicamos los metodos por parametro */
class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  /* =========================================================================
     Metodo save(objet)
     ========================================================================== */

  /* Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
     ========================================================================== */

  /* usamos async ya que es asincrona  */
  async save(obj) {
    /* manejamos los errores con try catch */
    console.log(obj);
    try {
      if (obj.title) {
        /* obtenemos la ruta donde esta nuestro archivo de this.ruta */
        const dataArch = await fs.readFile(this.ruta, "utf8");
        /* lo pasamos a objeto js */
        const dataArchParse = JSON.parse(dataArch);
        /* preguntamos si tiene algo */
        if (dataArchParse.length) {
          const idAutomatic = dataArchParse[dataArchParse.length - 1].id + 1;
          /* si tiene algo agremos a lo que tenia el obj nuevo */
          await fs.writeFile(this.ruta, JSON.stringify([...dataArchParse, { ...obj, id: idAutomatic }], null, 2));
          /* devolvemos al id del objeto creado  */
          console.log(`el numero de id es ${idAutomatic}`);
          return (`el numero de id es ${idAutomatic}`);
        } else {
          /* no hay productos agregamos el obj y creamos el id */
          await fs.writeFile(this.ruta, JSON.stringify([{ ...obj, id: dataArchParse.length + 1 }], null, 2));
          /* devolvemos al id del objeto creado  */
          return ("el numero de id es 1");
        }
      } else {
        console.log("el titulo no puede estar vacio");
        return "el titulo no puede estar vacio";
      }
    } catch (err) {
      return (err.message);
    }
  }

  /* =========================================================================
     Metodo getById(number)
     ========================================================================== */

  /* Recibe un id y devuelve el objeto con ese id, o null si no está.
     ========================================================================== */

  /* usamos async ya que es asincrona  */
  async getById(id) {
    /* manejamos los errores con try catch */
    try {
      /* leemos  el archivo de this.ruta */
      const dataArch = await fs.readFile(this.ruta, "utf8");
      /* lo pasamos a objeto js */
      const dataArchParse = JSON.parse(dataArch);
      /* buscamos si el id ingresado coincide con algun producto de nuestro archivo */
      console.log("aca", id);
      const producto = dataArchParse.find(producto => producto.id === id);
      /* si el id ingresado coincide con algun producto de nuestro archivo */
      if (producto) {
        /* retornamos el nombre del producto que coincide */
        console.log(`El producto es ${producto.title}`);
        return producto;
      } else {
        /* si no exite el id retornamos un mensaje informandolo */
        console.log("El producto no existe");
        return "no exite el id";
      }
    } catch (err) {
      return (err.message);
    }
  }

  /* =========================================================================
     Metodo getAll(Object[])
     ========================================================================== */

  /* Devuelve un array con los objetos presentes en el archivo.
     ========================================================================== */

  /* usamos async ya que es asincrona  */
  async getAll() {
    /* manejamos los errores con try catch */
    try {
      /* leemos  el archivo de this.ruta */
      const dataArch = await fs.readFile(this.ruta, "utf8");
      /* lo pasamos a objeto js */
      const dataArchParse = JSON.parse(dataArch);
      /* Preguntamos si hay productos en el archivo */
      if (dataArchParse.length) {
        /* mostramos los productos */
        return dataArchParse;
      } else {
        return ("No hay productos");
      }
    } catch (err) {
      return (err.message);
    }
  }

  /* =========================================================================
     Metodo deleteById(void)
     ========================================================================== */

  /* Elimina del archivo el objeto con el id buscado.
     ========================================================================== */

  /* usamos async ya que es asincrona  */
  async deleteById(id) {
    /* Manejamos los errores con try catch */
    try {
      /* leemos  el archivo de this.ruta */
      const dataArch = await fs.readFile(this.ruta, "utf8");
      /* Lo pasamos a objeto js */
      const dataArchParse = JSON.parse(dataArch);
      /* Buscamos si el id ingresado coincide con algun producto de nuestro archivo */
      const producto = dataArchParse.find(producto => producto.id === id);
      /* Preguntamos si hay producto con ese id  */
      if (producto) {
        /* filtramos todos los productos que no coinciden con el id. */
        const dataArchParseFilter = dataArchParse.filter(producto => producto.id !== id);
        /* Guardamos todos los archivos que no coinciden */
        await fs.writeFile(this.ruta, JSON.stringify(dataArchParseFilter, null, 2));
        return ("producto eliminado");
      } else {
        return ("no existe el producto");
      }
    } catch (err) {
      return (err.message);
    }
  }
  /* =========================================================================
     Metodo updateById(void)
     ========================================================================== */

  /* Actualiza un producto por el id
     ========================================================================== */

  async updateById(obj) {
    try {
      console.log(obj);
      const dataArch = await this.getAll(this.ruta);
      const objIndex = dataArch.findIndex(prod => prod.id === obj.id);
      console.log(objIndex);
      if (objIndex !== -1) {
        // existe
        dataArch[objIndex] = obj;
        await fs.writeFile(
          this.ruta,
          JSON.stringify(dataArch, null, 2)
        );
        return ("producto actualizado");
      } else {
        // no existe
        return ("producto no encontrado");
      }
    } catch (err) {
      return (err.message);
    }
  }

  /* =========================================================================
     Metodo deleteAll(void)
     ========================================================================== */

  /* Elimina todos los objetos presentes en el archivo
     ========================================================================== */

  /* usamos async ya que es asincrona  */
  async deleteAll() {
    /* Manejamos los errores con try catch */
    try {
      /* leemos  el archivo de this.ruta */
      const dataArch = await fs.readFile(this.ruta, "utf8");
      /* Lo pasamos a objeto js */
      const dataArchParse = JSON.parse(dataArch);
      /* Preguntamos si hay productos  */
      if (dataArchParse.length) {
        /* Pasamos un array vacio y asi eliminamos los productos */
        await fs.writeFile(this.ruta, JSON.stringify([], null, 2), "utf8");
        return ("productos eliminados");
      } else {
        return ("no hay productos");
      }
    } catch (err) {
      return (err.message);
    }
  }
}

module.exports = Contenedor;
