/* ===============================
   Nuestra app
   =============================== */

/*
   configuracion basica
   =============================== */

/**
 *  1. Requerimos el módulo integrado de node.js llamado HTTP
 *     que permite a Node.js transferir datos a través del
 *     Protocolo de transferencia de hipertexto (HTTP).
 *  2.
 */

const express = require("express");
const { Server: HttpServer } = require("http");/* [1] */
const { Server: IoServer } = require("socket.io");
const logger = require("morgan");
const path = require("path");

const app = express();

const http = new HttpServer(app);
const io = new IoServer(http);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

module.exports = http;
