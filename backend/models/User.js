const db = require("../config/db");

exports.createUser = async (user) => {
  return db("users").insert(user);
};

exports.findUserByEmail = async (email) => {
  return db("users").where({ email }).first();
};

exports.findAllUsers = async () => {
  return db("users").select("id", "name", "email", "role");
};

exports.banUser = async (id) => {
  return db("users").where({ id }).update({ role: "banned" });
};
