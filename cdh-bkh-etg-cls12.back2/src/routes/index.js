/* ===============================
   Administramos las rutas
   =============================== */

const express = require("express");
const router = express.Router();

router.get("/health", async (_req, res) => {
    res.status(200).json({
        success: true,
        health: "up",
        enviroment: process.env.ENVIROMENT || "not found"
    });
});
