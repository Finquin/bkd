/* ===============================
   Iniciamos el servidor
   =============================== */

/*
   Servidor Express
   =============================== */

/**
 *
 *  1. Requerimos el módulo app.js
 *  2.
 *
 */

const http = require("./app");/* [1] */

require("dotenv").config();

const PORT = process.env.PORT || 8080;

console.clear();
http.listen(PORT, () => console.info("\x1b[033\x1b[32m", `server running in port ${PORT}\n`));
