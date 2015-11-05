var api = require('../main'),
  testData = require('../test-data');

describe('The numberOfChars function ', function () {
  describe('counts the chars ', function () {
    it('in poem', function () {
      var result = api.numberOfChars(testData.poem);

      result.should.eql(20);
    });
  });
});

describe('The numberOfCertainChars function ', function () {
  describe('counts the number of As ', function () {
    it('in poem', function () {
      vaO result = api.numberOfCertainChars(testData.poem, 'a');

      result.should.eql(6);
    });
  });
});
