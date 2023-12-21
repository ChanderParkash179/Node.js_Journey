const { promisePool } = require("../data/connection");

class UserService {
  fetchAll() {
    return promisePool.query("SELECT * FROM USERS");
  }

  fetchById(id) {
    return promisePool.query("SELECT * FROM USERS WHERE ID = ? ", [id]);
  }

  create(user) {
    return promisePool.query("INSERT INTO USERS(name) VALUES (?)", [user.name]);
  }

  update(user, id) {
    return promisePool.query("UPDATE USERS SET id = ?, name = ? WHERE id = ?", [
      user.id,
      user.name,
      id,
    ]);
  }

  delete(id) {
    return promisePool.query("DELETE FROM USERS WHERE ID = ?", [id]);
  }

  deleteAll() {
    return promisePool.query("DELETE FROM USERS");
  }
}

module.exports = new UserService();
