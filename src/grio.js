/*
Given a book passed as a string, return how many times each word appears in the most efficient way.
Use a TDD approach.

Example:

'To be, or not to be: that is the question:
Whether 'tis nobler in the mind to suffer'

to -> 3
be -> 2
nobler -> 1

*/

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ui: 'bdd'});

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  //tests
  
  it('should have an object as an output', ()=>{
    assert.strictEqual(typeof wordCount('To be, or not to be: that is the question'), 'object');
  });
  
  it('should return an empty object if the input is an empty string', ()=>{
    assert.deepEqual(wordCount(''), {});
  });
  
  it('should return an object with one property with value of 1', ()=>{
    assert.deepEqual(wordCount('to'), {to: 1});
  });
  
  it('should return the same object even when the word is uppercase', ()=>{
    assert.deepEqual(wordCount('To'), {to: 1});
  });
  
  it('should return an object when the input has only words and spaces', ()=>{
    assert.deepEqual(wordCount('To be be'), {
      to: 1,
      be: 2
    });
  });
  
  it('should return the same object even when there are punctuation in the input', ()=>{
    assert.deepEqual(wordCount('To be, be'), {
      to: 1,
      be: 2
    });
  });
  
    
  it('should return the correct object when there are punctuation in the input', ()=>{
    assert.deepEqual(wordCount("To be, to be: question: Whether 'tis nobler to suffer"), {
      to: 3,
      be: 2,
      nobler: 1,
      tis: 1,
      question: 1,
      whether: 1,
      suffer: 1
    });
  });
  
  //code
  var wordCount = function(str) {
    return str ? str.split(' ').reduce((obj, cur)=>{
      var prop = cur.replace(/[^A-Za-z]/g, '').toLowerCase();
      if(!obj[prop]) obj[prop] = 1;
      else obj[prop]++;
      return obj;
    }, {}) : {};
  };
});

mocha.run(function() {});
