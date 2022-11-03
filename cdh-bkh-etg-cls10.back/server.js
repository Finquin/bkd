/* import internas */
const app = require("./app");

/* llamamos a la variable de entorno env.PORT */
const PORT = process.env.PORT || 3000;

console.clear();

/* Le indicamos donde tiene que escuchar nuestro servidor */
app.listen(PORT, () => {
    console.info(`server running in port ${PORT}`);
});
