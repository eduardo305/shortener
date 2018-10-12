const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShortenerSchema = new Schema({
  originalUrl: String,
  shortUrl: String
});

mongoose.model('Shortener', ShortenerSchema);