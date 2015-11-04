var api = require('../main.js'),
  testData = require('../test-data');

function isEven(num){
  return num % 2 === 0;
}

function isOdd(num){
  return !isEven(num);
}

function containsA(word){
  return word.indexOf('a') > -1;
}

describe('The distill function ', function () {
  describe('filters ', function () {
    it('even simple numbers', function () {
      var result = api.distill(testData.simpleNumbers, isEven);

      result.should.eql([2]);
    });

    it('odd one number', function () {
      var result = api.distill(testData.oneNumber, isOdd);

      result.should.eql([]);
    });

    it('more odd numbers', function () {
      var result = api.distill(testData.moreNumbers, isOdd);

      result.should.eql([31, -11, 27]);
    });
  });
});

describe('The distill function ', function () {
  describe('finds words ', function () {
    it('with As', function () {
      var result = api.distill(testData.poem, containsA);

      result.should.eql(['Mary', 'had', 'a', 'laaamb']);
    });
  });
});