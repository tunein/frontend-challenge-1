var api = require('../main.js'),
  testData = require('../test-data');

var poem = ['Mary', 'had', 'a', 'little', 'lamb'];

function add(total, n){
  return total + n;
}

function combineIt(words, word){
  return words + word
}

describe('The funnel function ', function () {
  describe('sums ', function () {
    it('simple numbers', function () {
      var result = api.funnel(testData.simpleNumbers, add, 0);

      result.should.eql(6);
    });

    it('one number', function () {
      var result = api.funnel(testData.oneNumber, add, 0);

      result.should.eql(-2);
    });

    it('more numbers', function () {
      var result = api.funnel(testData.moreNumbers, add, -47);

      result.should.eql(0);
    });
  });
});

describe('The funnel function ', function () {
  describe('combines words ', function () {
    it('of poems', function () {
      var result = api.funnel(testData.poem, combineIt, '');

      result.should.eql('Maryhadalittlelaaamb');
    });
  });
});