var chai = require("chai"),
    expect = chai.expect;
    html = require('./utils/example'),
    Matcher = require('../lib/matcher'),
    matcher = new Matcher();

describe('Matcher', function () {
  
  describe('when calling match with a template', function () {
    
    it('should return an object { with: [Function], template: template } ', function () {
      
      
      expect(matcher.match('<template></template>')).to.have.property('with');
      expect(matcher.match('<template></template>')).to.have.property('template');
      expect(matcher.match('<template></template>').with).to.be.a('Function');
      
    });
    
    it('should have keep template value', function () {
      
      expect(matcher.match('<template></template>').template).to.be.equal('<template></template>');
      
    });
    
  });
  
  describe('when calling match with a template and a example html file', function () {
    
    var template = '<meta * />';
    var response = ['<meta name="Keywords" content="" />', 
                    '<meta name="Description" content="" />', 
                    '<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />'];
    
    it('should return an array with objects for each time template matched', function () {
      
      expect(matcher.match(template).with(html)[0]).to.be.equals(response[0]);
      expect(matcher.match(template).with(html)[1]).to.be.equals(response[1]);
      expect(matcher.match(template).with(html)[2]).to.be.equals(response[2]);
      
    });
    
  });
  
  describe('when calling match with a template and a example html file', function () {
    
//    var template =  "<div * >*<div * >*</div>*</div>";
    var template = "<body>*</body>"
    var response = ['<meta name="Keywords" content="" />', 
                    '<meta name="Description" content="" />', 
                    '<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />'];
        
    it('should return an array with objects for each time template matched', function () {
      
      expect(matcher.match(template).with(html)[0]).to.be.equals(response[0]);
      expect(matcher.match(template).with(html)[1]).to.be.equals(response[1]);
      expect(matcher.match(template).with(html)[2]).to.be.equals(response[2]);
      
    });
    
  });
  
});
