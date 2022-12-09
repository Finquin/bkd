
// const express = require("express");

const { carritosDao } = require("../daos/index");

const getAll = async (req, res, next) => {
  try {
    const listaProductos = await carritosDao.getAll();
    res.json(listaProductos);
  } catch (err) {
    next(err);
  }
};

const postCarr = async (req, res, next) => {
  try {
    const idCarrito = await carritosDao.save(req.body);
    res.json(idCarrito);
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await carritosDao.deleteById(parseInt(id));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carritoById = await carritosDao.getById(parseInt(id));
    const listaProductos = carritoById.products;
    res.json(listaProductos);
  } catch (err) {
    next(err);
  }
};

const postIdProductos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productoParaAgregar = req.body;
    const carritoById = await carritosDao.addProductToCart(id, productoParaAgregar);
    res.json(carritoById);
  } catch (err) {
    next(err);
  }
};

const deleteIdCartProdIdProd = async (req, res, next) => {
  try {
    const { idCart, idProduct } = req.params;
    console.log(idCart, idProduct);
    await carritosDao.deleteProductById(parseInt(idCart), parseInt(idProduct));
  } catch (err) {
    next(err);
  }
};

const error = async (req, res, next) => {
  try {
    res.json({
      error: -2,
      description: "Ruta no implementada"
    });
  } catch (err) {
    next(err);
  }
};
// const getId = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const productoById = await carritosDao.getById(parseInt(id));
//     productoById
//       ? res.json(productoById)
//       : res.json({ error: "Producto no encontrado" });
//   } catch (err) {
//     next(err);
//   }
// };

// const postSave = async (req, res, next) => {
//   try {
//     if (process.env.ADMIN) {
//       const idProduct = await carritosDao.save(req.body);
//       const productoById = await carritosDao.getById(parseInt(idProduct));
//       res.json(productoById);
//     } else {
//       res.json({
//         error: -1,
//         description: "Ruta api/productos, Método POST, No autorizado"
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// const putId = async (req, res, next) => {
//   try {
//     if (process.env.ADMIN) {
//       const { id } = req.params;
//       const respuesta = await carritosDao.updateById(parseInt(id), req.body);
//       res.json(respuesta);
//     } else {
//       res.json({
//         error: -1,
//         description: "Ruta api/productos/id, Método PUT, No autorizado"
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// const deleteId = async (req, res, next) => {
//   try {
//     if (process.env.ADMIN) {
//       const { id } = req.params;
//       await carritosDao.deleteById(parseInt(id));
//     } else {
//       res.json({
//         error: -1,
//         description: "Ruta api/productos/id, Método DELETE, No autorizado"
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// const getAsterisco = async (req, res, next) => {
//   try {
//     res.json({
//       error: -2,
//       description: "Ruta no implementada"
//     });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  getAll,
  postCarr,
  deleteById,
  getById,
  postIdProductos,
  deleteIdCartProdIdProd,
  error
  // getId,
  // postSave,
  // putId,
  // deleteId,
  // getAsterisco
};
