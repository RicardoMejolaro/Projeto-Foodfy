const recipes = require('../file-system/data.js');

//Index Gerenciador
exports.index = (req, res) => {
  return res.render('manager/index', { recipes });
}
