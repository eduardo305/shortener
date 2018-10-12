require('../models/Shortener')

const mongoose = require('mongoose');
const Shortener = mongoose.model('Shortener')
const shortid = require('shortid')
const isUrl = require('is-url')

const Messages = require('../../config/messages/messages')

const isShortened = (url) => {
  // A stronger check would be advise
  return url.indexOf('http://127.0.0.1:3000') != -1 && shortid.isValid(url.substr(22))
}

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

    if (isShortened(originalUrl)) {
      const savedShortUrl = await Shortener.findOne({ shortUrl: originalUrl.substr(22) })

      if (savedShortUrl) {
        return response.status(200).json({ success: true, data: savedShortUrl })
      } else {
        return response.status(401).json({ success: false, message: Messages.alreadyShortened })
      }
    }

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

  app.get('/api/v1/shortener/original/:id', async (request, response) => {
    const urlId = request.params.id;

    try {
      const savedShortUrl = await Shortener.findOne({ shortUrl: urlId })

      if (savedShortUrl) {
        response.status(200).json({ success: true, data: savedShortUrl })
      } else {
        response.status(401).json({ success: false, message: Messages.urlNotFound })
      }
    } catch(error) {
      response.status(500).json({ success: false,  message: Messages.defaultError })
    }
  })
};