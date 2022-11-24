const knexConfig = require("./config.knex");
const knex = require("knex")(knexConfig);

knex.schema.createTable("products", table => {
    table.increments("id");
}
);
