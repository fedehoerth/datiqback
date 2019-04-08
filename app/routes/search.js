const express = require('express');
const cors = require('cors');

const persons = require('../data/personas.json');
const filterPersons = require('../helpers/filterPersons');

const searchRoute = express.Router();

searchRoute.use('/search', cors(), (req, res) => {
  const { nombre, apellido, email } = req.query;

  if (typeof nombre !== 'undefined') {
    res.json(filterPersons('nombre', nombre));
  } else if (typeof email !== 'undefined') {
    res.json(filterPersons('email', email));
  } else if (typeof apellido !== 'undefined') {
    res.json(filterPersons('apellido', apellido));
  } else {
    res.json(persons.personas);
  }
});

module.exports = searchRoute;
