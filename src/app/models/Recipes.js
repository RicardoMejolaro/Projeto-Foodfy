const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`
      SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      INNER JOIN chefs ON recipes.chef_id = chefs.id
      ORDER BY recipes.id DESC
      `, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
          INSERT INTO recipes (
            chef_id,
            image,
            title,
            ingredients,
            preparation,
            information,
            created_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING id
        `

    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`
      SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      INNER JOIN chefs ON recipes.chef_id = chefs.id
      WHERE recipes.id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
          UPDATE recipes SET 
          chef_id=($1),
          image=($2),
          title=($3),
          ingredients=($4),
          preparation=($5),
          information=($6)
          WHERE id = $7
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();

    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM recipes WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();
    });
  },
  chefsSelectOptions(callback) {
    db.query(`SELECT name, id FROM chefs`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
}