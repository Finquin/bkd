const { optionsMDB } = require("./mariaDB/conexionMariaDB");
const { optionsQLite } = require("./sqlite3/conexionSQLite");

const knexMariaDB = require("knex")(optionsMDB);
const knexSqlite3 = require("knex")(optionsQLite);

const products = [
	{
		title: "Quimica",
		price: 234.56,
		thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-64.png",
		"id": 1
	},
	{
		title: "Calculadora",
		price: 234.56,
		thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
		"id": 2
	},
	{
		title: "Globo Terráqueo",
		price: 345.67,
		thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
		"id": 3
	},
	{
		title: "Libros",
		price: 345.67,
		thumbnail: "https://cdn4.iconfinder.com/data/icons/education-739/64/graduation-university-scholarship-degree-education-book-hat-256.png",
		"id": 4
	}
];

// **-- Productos --**

const tablaProductos = "products";

const batchMariaDB = async () => {
	try {
		console.log("Creando tabla Products...");
		await knexMariaDB.schema.createTable(tablaProductos, table => {
			table.increments("id");
			table.string(title);
			table.float(price);
			table.string(thumbnail);
		});

		console.log("Insertando productos...");
		await knexMariaDB(tablaProductos).insert(products); // Le podemos pasar un obj o un array
	} catch (error) {
		console.log(`error creando tabla ${error}`);
	} finally {
		knexMariaDB.destroy();
	}
};

// **-- Mensajes --**

const messages = [
	{
		mail: "dcosta@gmail.com",
		mensaje: "hola",
		fecha: "5:27:12 AM"
	},
	{
		mail: "niea@gmail.com",
		mensaje: "hola nie",
		fecha: "11:27:03 AM"
	},
	{
		mail: "dcosta@gmail.com",
		mensaje: "hola Mirta",
		fecha: "5:33:22 AM"
	}
];

const tablaMensajes = "messages";

const batchSqlite3 = async () => {
	try {
		console.log("Creando tabla Mensajes...");
		await knexSqlite3.schema.createTable(tablaMensajes, table => {
			table.increments("id");
			table.string("mail");
			table.float("fecha");
			table.string("mensaje");
		});

		console.log("Insertando mensajes...");
		await knexSqlite3(tablaMensajes).insert(messages); // Le podemos pasar un obj o un array
	} catch (error) {
		console.log(error);
	} finally {
		knexSqlite3.destroy();
	}
};

batchMariaDB();
batchSqlite3();
