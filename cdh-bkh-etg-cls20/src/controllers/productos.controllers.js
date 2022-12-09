
const { productosDao } = require("../daos/index");

const getAll = async (req, res, next) => {
  try {
    const listaProductos = await productosDao.getAll();
    res.json(listaProductos);
  } catch (err) {
    next(err);
  }
};

const getId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productoById = await productosDao.getById(parseInt(id));
    productoById
      ? res.json(productoById)
      : res.json({ error: "Producto no encontrado" });
  } catch (err) {
    next(err);
  }
};

const postSave = async (req, res, next) => {
  try {
    if (process.env.ADMIN) {
      const idProduct = await productosDao.save(req.body);
      const productoById = await productosDao.getById(parseInt(idProduct));
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
};

const putId = async (req, res, next) => {
  try {
    if (process.env.ADMIN) {
      const { id } = req.params;
      const respuesta = await productosDao.updateById(parseInt(id), req.body);
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
};

const deleteId = async (req, res, next) => {
  try {
    if (process.env.ADMIN) {
      const { id } = req.params;
      await productosDao.deleteById(parseInt(id));
    } else {
      res.json({
        error: -1,
        description: "Ruta api/productos/id, Método DELETE, No autorizado"
      });
    }
  } catch (err) {
    next(err);
  }
};

const getAsterisco = async (req, res, next) => {
  try {
    res.json({
      error: -2,
      description: "Ruta no implementada"
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getId,
  postSave,
  putId,
  deleteId,
  getAsterisco
};
