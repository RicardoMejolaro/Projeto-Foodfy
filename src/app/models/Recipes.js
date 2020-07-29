const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`
      SELECT * FROM recipes
      ORDER BY recipes DESC`, (err, results) => {
        if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM recipes where id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  }
}