const shortid = require('shortid')

// A stronger check would be advise
module.exports = (url) => url.indexOf('http://127.0.0.1:3000') != -1 && shortid.isValid(url.substr(22))