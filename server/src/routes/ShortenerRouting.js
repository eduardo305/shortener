require('../models/Shortener')

const mongoose = require('mongoose');
const Shortener = mongoose.model('Shortener')

module.exports = app => {
  app.get('/api/v1/shortener', async (request, response) => {
    const urls = await Shortener.find({})

    response.send(urls);
  });

  app.get('/api/v1/shortener/:id', async (request, response) => {
    const url = await Shortener.find({ _id: request.params.id })
    response.send(url)
  })
};