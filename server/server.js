const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.mongo.uri, { ...config.mongo.settings }, (err, db) => {
  if (err) console.log(err);
  console.log('Successfully connected to MongoDB');
});

const app = express();
const port = process.env.PORT || config.port;

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'I\'m a response coming from Express server! ' });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`The magic starts on port ${port}`));