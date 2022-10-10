
/* =========================================================================
   Cls 04
   Manejo de Archivos en Javascript
   Entrega:02 Cls:04
 ============================================================================ */

/* Requerimos el Filesystem (fs) de node */
const Contenedor = require("./contenedor");

/*
 * Creamos contenedor hacemos referencia para instanciar la clase Contenedor
 * y pásamos por parametro la ruta de nuestro archivo
 * productos.txt.
*/
const contenedor = new Contenedor("./productos.txt");

/* =========================================================================
   Metodo save(objet)
   ========================================================================== */

/* Usamos el obj contenedor con  metodo save y le pasamos un obj para ingresar
*  un producto a nuestra archivo producto.txt
*/

/* eslint-disable indent */
// contenedor.save({
//    title: "Escuadra",
//    price: 123.45,
//    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
// });

/* =========================================================================
   Metodo getById(number)
   ========================================================================== */

/* Usamos el obj contenedor con el metodo getById y le pasamos un numero de id.
*  para listar un producto por id
*/
// contenedor.getById(4);

/* =========================================================================
   Metodo getAll()
   ========================================================================== */

/* Usamos el obj contenedor con el metodo getAll para listar todos los productos
*  de nuestro archivo productos.txt
*/
// contenedor.getAll();

/* =========================================================================
   Metodo deleteById()
   ========================================================================== */
/* Usamos el obj contenedor con el metodo deleteById para eliminar un producto por id
*  d nuestro archivo productos.txt
*/
// contenedor.deleteById(4);

/* =========================================================================
   Metodo deleteAll()
   ========================================================================== */

/* Usamos el obj contenedor con el metodo deleteAll para eliminar todos  los
*  productos de nuestro archivo productos.txt
*/
contenedor.deleteAll();
