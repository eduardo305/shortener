require('../models/Shortener')

const mongoose = require('mongoose')
const Shortener = mongoose.model('Shortener')

const Messages = require('../../config/messages/messages')


const slugGenerator = {
  generate: async () => {
    try {
      // We are using an alphabet of 33 chars and building strings of 8 chars length
      // Considering 10K new shortUrls per minute, we would have 14400000 per day
      // And more than 5 billion new short urls per year. Considering our alphabet lenght
      // And our slug lenght, we would get Math.pow(33, 8) = 1.5 trillion, approximately.
      // That would give us about 267 years of shortUrl generation
      const slug = Math.random().toString(33).substring(2, 10);

      while (true) {
        const savedShortUrl = await Shortener.findOne({ shortUrl: slug })

        if (!savedShortUrl) {
          break;
        }
      }

      return slug
    } catch(error) {
      response.status(500).json({ success: false,  message: Messages.defaultError })
    }
  }
}

module.exports = slugGenerator