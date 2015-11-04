var api = require('../main.js'),
  testData = require('../test-data');

function square(input){
  return input * input;
}

function splitIt(word){
  return word.split('');
}

describe('The fanOut function ', function () {
  describe('squares ', function () {
    it('simple numbers', function () {
      var result = api.fanOut(testData.simpleNumbers, square);

      result.should.eql([1, 4, 9]);
    });

    it('one number', function () {
      var result = api.fanOut(testData.oneNumber, square);

      result.should.eql([4]);
    });

    it('more numbers', function () {
      var result = api.fanOut(testData.moreNumbers, square);

      result.should.eql([961, 121, 729]);
    });
  });
});

describe('The fanOut function ', function () {
  describe('splits strings ', function () {
    it('into char arrays', function () {
      var result = api.fanOut(testData.poem, splitIt);

      result.should.eql([
        ['M', 'a', 'r', 'y'],
        ['h', 'a', 'd'],
        ['a'],
        ['l', 'i', 't', 't', 'l', 'e'],
        ['l', 'a', 'a', 'a', 'm', 'b']
      ]);
    });
  });
});