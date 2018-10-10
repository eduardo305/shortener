module.exports = {
  port: 5000,
  host: 'http://localhost',
  mongo: {
    uri: 'mongodb://shortener:shortener1@ds227373.mlab.com:27373/shortener',
    settings: {
      useNewUrlParser: true
    }
  }
}