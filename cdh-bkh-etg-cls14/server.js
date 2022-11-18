
const app = require("./app");

const PORT = process.env.PORT || 3000;

require("dotenv").config();
console.clear();

/* Le indicamos donde tiene que escuchar nuestro servidor */
app.listen(PORT, () => {
    console.info(`server running in port ${PORT}`);
});
