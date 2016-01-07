var path = require('path');
var fs = require('fs');

module.exports = function(directory) {
  var results = {};

  fs.readdirSync(directory).forEach(function(file) {
    var filePath = path.join(directory, file);
    var fileStat = fs.statSync(filePath);
    var fileExtension = path.extname(filePath);
    var fileName = path.basename(filePath, fileExtension);

    if (fileExtension === '.js' && fileName !== 'index' && !fileStat.isDirectory()) {
      results[fileName] = require(filePath);
    }
  });

  return results;
};

