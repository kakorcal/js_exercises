const assert = require('assert');
const path = require('path');
const LetterChanges = require(path.resolve('src/prompts', '4_letter_changes'));

/*
Input  : "hello*3"
Output : "Ifmmp*3"

Input  : "fun times!"
Output : "gvO Ujnft!"
*/


describe('4_letter_changes', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LetterChanges, 'function');
  });
  
  it('should return string with shifted letters', ()=>{
    assert.strictEqual(LetterChanges("hello*3"), "Ifmmp*3");
    assert.strictEqual(LetterChanges("fun times!"), 'gvO Ujnft!');
    assert.strictEqual(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"), 'b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~');
  });
});