var chai = require("chai"),
    expect = chai.expect,
    regexator = require('../lib/utils/regexator');

describe('regexator', function () {
  
  describe('on calling regexator with a simple template', function () {
    
    var template = "<meta * />";
    
    
    it('should return the template RegExp', function () {
     
      
      expect(regexator(template).toString()).to.be.equals('/<meta\\s.*\\s\\/>/');
      
    });
    
  });
  
  describe('on calling regexator with a normal template', function () {
    
    var template = "<div * >*<div * >*</div>*</div>";
    
    
    it('should return the template RegExp', function () {
     
      expect(regexator(template).toString()).to.be.equals('/<div\\s.*\\s>.*<div\\s.*\\s>.*<\\/div>.*<\\/div>/');
      
    });
    
  });
  
});