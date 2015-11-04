var api = {};

/*
  PART 1: Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  args: input - input collection
        fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

 function double(n) { return n * n; }

  Restrictions:
    - Do not use make any function calls (other than fn)
    - You may not use any external libraries

*/
api.fanOut = function(input, fn) {
  // TODO: your implementation here.
  return [];
};



/*
 PART 2: Implement funnel.

 funnel - return an result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 args: input - input collection
       fn - function to apply to each item in the collection with
            args accumulation value and current value
       startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4

      function add(total, n) { return total + n; }

 Restrictions:
   - Do not use make any function calls (other than fn)
   - You may not use any external libraries

 */
api.funnel = function(input, fn, startValue){
  // TODO: your implementation here.
  return 0;
};



/*
 PART 3: Implement distill.

 distill - return a new collection of results after applying the
 predicate function to each item. Only include the item in the result
 if the predicate returns true.

 args: input - input collection
 fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 Restrictions:
 - Do not use make any function calls (other than fn)
 - You may not use any external libraries

 */
api.distill = function(input, fn){
  // TODO: your implementation here.
  return [];
};



/*
 PART 4: Implement numberOfChars.

 numberOfChars - return the number of characters in the input array of strings

 args: input - input collection of strings (words)

 EX:  - numberOfChars(['the']) -->  3;
 - numberOfChars(['the', 'end']) -->  6;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfChars = function(input){
  // TODO: your implementation here
  return 0;
};



/*
 PART 4: Implement numberOfCertainChars.

 numberOfCertainChars - return the number of c characters in the input array of strings

 args: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numberOfCertainChars(['the'], 'e') -->  1;
 - numberOfChars(['the', 'end'], 'e') -->  2;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfCertainChars= function(input, c){
// TODO: your implementation here
  return 0;
};

module.exports = api;