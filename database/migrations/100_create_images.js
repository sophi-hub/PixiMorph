exports.up = function (knex) {
  return knex.schema.createTable("images", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.text("image_url").notNullable();
    table.text("tags").notNullable();
    table.enu("style", ["Cartoon", "Pixar", "Disney"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
