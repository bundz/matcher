var fs = require('fs');

var file = fs.readFileSync('./spec/utils/example.html');

module.exports = file.toString();