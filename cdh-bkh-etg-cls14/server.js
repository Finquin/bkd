/* ====================================
   INICIO SERVIDOR
   ==================================== */

/*
* 1)-Usamos dotenv una herramienta externa para manejar las variables de entorno
* 2)-Importamos nuestra archivo app
* 3)-Asignamis a PORT un numero de puerto fijo y una alternativo
* 4)-Vinculamos y escuchamos las conexiones en el host y el puerto especificados.
*/

require("dotenv").config();/* [1] */
const app = require("./app");/* [2] */
const PORT = process.env.PORT || 3000;/* [3] */
console.clear();
app.listen(PORT, () => {
    console.info(`server running in port ${PORT}`);
});/* [4] */
