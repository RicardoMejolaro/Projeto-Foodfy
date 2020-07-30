const { date } = require('../../lib/utils');
const Chefs = require('../models/Chefs');

module.exports = {
  index(req, res) {  
    Chefs.all(function(chefs) {
      return res.render('manager/chefs/index', { chefs });
    });
  },
  create(req, res) {
    return res.render('manager/chefs/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)
  
    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { avatar_url, name } = req.body;

    const data = [
      avatar_url,
      name,
      date(Date.now()).iso
    ];
    
    Chefs.create(data, (chef) => {
      return res.redirect(`/foodfy/admin/chef/${chef.id}`);
    });
  
  },
  show(req, res) {
    Chefs.find(req.params.id, (chef) => {
      if (!chef) return res.send('Chef não localizado!');

      return res.render('manager/chefs/show', { chef });
    });   
  },
  edit(req, res) {
    Chefs.find(req.params.id, (chef) => {
      if (!chef) return res.send('Chef não localizado!');

      return res.render('manager/chefs/edit', { chef });
    });   
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { avatar_url, name, id } = req.body;

    const data = [
      avatar_url,
      name,
      id
    ];

    Chefs.update(data, () => {
      return res.redirect(`/foodfy/admin/chef/${id}`);
    });
  },
  delete(req, res) {
    Chefs.delete(req.body.id, () => {
      return res.redirect('/foodfy/admin/chefs');
    });
  }
}