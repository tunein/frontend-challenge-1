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

describe('The numberOfAs function ', function () {
  describe('counts the As ', function () {
    it('in poem', function () {
      var result = api.numberOfAs(testData.poem);

      result.should.eql(6);
    });
  });
});
