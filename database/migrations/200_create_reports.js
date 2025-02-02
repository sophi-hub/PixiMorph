exports.up = function (knex) {
  return knex.schema.createTable("reports", function (table) {
    table.increments("id").primary();
    table.integer("image_id").unsigned().notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.text("reason").notNullable();
    table.timestamp("reported_at").defaultTo(knex.fn.now());

    table
      .foreign("image_id")
      .references("id")
      .inTable("images")
      .onDelete("CASCADE");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reports");
};
