
const express = require("express");
const logger = require("morgan");
const { create } = require("express-handlebars");

require("dotenv").config();

const app = express();

const hbs = create({
   extname: ".hbs"
   // defaultLayout: "index.hbs",
   // layoutsDir: __dirname + "./views/layouts"

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.engine("hbs", hbs.engine);
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (_req, res) => {
   res.render("home", { listExists: true });
});

module.exports = app;
