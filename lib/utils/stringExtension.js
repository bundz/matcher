String.prototype.matchAll = function (regexp) {
  
  var matches = [];
  var str = this.toString();  
  var result = str.match(regexp);
  
  while(result) {
    
    matches.push(result.toString());
    
    str = str.replace(result.toString(), '');
    
    result = str.match(regexp);
    
  }
  
  return matches;
};

String.prototype.replaceAll = function (search, replace) {
  
  if(!replace) 
    return this;

  var str = this.toString();
  var indexes = str.allIndexesOf(search);
  var offset = 0;
  
  indexes.forEach(function (index) {
    
    str = str.slice(0, index + offset) + replace + str.slice(index + offset + 1, str.length);
    offset += replace.length;
    
  })
  
  console.log(str);
  return str;
  
};

String.prototype.allIndexesOf = function (search) {
  
  var str = this.toString();
  var response = [];
  var index = str.indexOf(search);
  
  while (index !== -1) {
    
    response.push(index);
    
    str = str.slice(index + 1, str.length);
    index = str.indexOf(search);
    
  }
  
  return response;
};

module.exports = {};