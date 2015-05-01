require('./stringExtension');

var regexator = function (template) { 
  
  var regex = template.replaceAll('/', '\\/');
  regex = regex.replaceAll(' ', '\\s');
  regex = regex.replaceAll('*', '(.|\\n)*');
  
  return new RegExp(regex);

};

module.exports = regexator;