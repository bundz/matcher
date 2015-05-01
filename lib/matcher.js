require('./utils/stringExtension');

var regexator = require('./utils/regexator');

var Matcher = function () { };

Matcher.prototype.match = function (template) {
  return { with: MatchTemplateWithFile, template: template };
};

function MatchTemplateWithFile (file) {
  
  var regex = regexator(this.template);
  
  console.log(regex.toString());
  
  return file.matchAll(regex);
  
}

module.exports = Matcher;