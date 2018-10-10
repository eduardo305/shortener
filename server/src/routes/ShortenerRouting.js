require('../models/Shortener')

const mongoose = require('mongoose');
const Shortener = mongoose.model('Shortener')
const shortid = require('shortid')
const isUrl = require('is-url')

const Messages = require('../../config/messages/messages') 

module.exports = app => {
  app.get('/api/v1/shortener', async (request, response) => {
    const urls = await Shortener.find({})

    response.send(urls);
  });

  app.get('/api/v1/shortener/:id', async (request, response) => {
    try {
      const url = await Shortener.find({ _id: request.params.id })
      response.send({ success: true , data: url })

    } catch(error) {
      response.status(500).json({ success: false,  message: Messages.defaultError })
    }
  })

  app.post('/api/v1/shortener', async (request, response) => {
    const { originalUrl } = request.body;

    const shortUrl = shortid.generate();

    if (isUrl(originalUrl)) {
      try {
        const savedUrl = await Shortener.findOne({ originalUrl })
  
        if (savedUrl) {
          response.status(200).json({ success: true, data: savedUrl })
        } else {
          const newUrl = new Shortener({
            originalUrl,
            shortUrl
          })
  
          await newUrl.save()
          response.status(200).json({ success: true, data: newUrl })
        }
      } catch(error) {
        response.status(500).json({ success: false,  message: Messages.defaultError })
      }
    } else {
      return response.status(401).json({ success: false, message: Messages.invalidUrl })
    }
  })
};