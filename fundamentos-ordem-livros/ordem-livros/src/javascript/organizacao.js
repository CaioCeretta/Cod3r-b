/*
  How JS basically works

  Sentences (optional ;) and blocks ( {} )

  we can think that js works similar to a book

  A book has letters, which makes a sentence, which make a paragraph, which make a page, which makes a chapter, which
  makes a whole book.

  So we have this sequence, that mean that we come from something small to something bigger and inside the js language
  we have the code sentences, which may or no end in a semicolon, and we have a block of code that is defined through a
  pair of curly braces
*/

console.log('Buongiorno, JS!'); // One sentence
console.log('Buon pomeriggio, JS'); // One sentence
console.log('Buona sera, JS'); // One sentence

// But it can also miss the semi colon that it would work just fine

console.log('Buona notte, JS')

/* And we define a block of code as a pair with curly braces, blocks are nothing more than grouping of sentences, just as
a book have a paragraph that are sentences grouping, that end with . like on code sentences they end up with ;

Code sentences can occupy more than one line without a problem.

We need to be careful that we can't break our code in any place, we can break before the dot from an object, such as
console or console   that they would work just fine, but we can't break on places like console.log('Buon      in the middle
  .log         .log                                                                                giorno !')
of a string, because it would also generate a problem.

When we put a code inside a block, we'll notice that the tool is going to put another space on our editor, to give this
idea of hierarchy, to give this idea of one, so if we create another block inside a block, it will insert those spaces.

*/

{
  console.log('Buongiorno, JS!');
  console.log('Buon pomeriggio, JS');
  console.log('Buona sera, JS');
}

