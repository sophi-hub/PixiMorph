require("dotenv").config();

const knex = require("knex");
const knexConfig = require("../../database/knexfile");

const db = knex(knexConfig[process.env.DB_ENV || "development"]);

db.raw("SELECT 1")
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
