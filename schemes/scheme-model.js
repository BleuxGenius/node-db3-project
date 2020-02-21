const db = require("../db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};


function find() {
    return db("schemes");
  }
  
  function findById(id) {
    return db("schemes")
      .where({ id })
      .first();
  }
  
  function add(schemes) {
    return db("users").insert(schemes, "id");
  }
  
  function update(id, changes) {
    return db("schemes")
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db("schemes")
      .where({ id })
      .del();
  }
  
  function findSteps(id) {
    return db("schemes as s")
      .join("users as u", "u.id", "p.user_id")
      .select("p.contents", "u.username as saidBy")
      .where("user_id", id);
  }
  