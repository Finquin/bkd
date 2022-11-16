/* import internas */

const app = require("./app");

/* llamamos a la variable de entorno env.PORT */
const PORT = process.env.PORT || 3000;

require("dotenv").config();
console.clear();

/* Le indicamos donde tiene que escuchar nuestro servidor */
app.listen(PORT, () => {
    console.info(`server running in port ${PORT}`);
});

console.log("======================================");
console.log(`Selecciono el template ${process.env.TEMPLATE}`);
console.log("======================================");
