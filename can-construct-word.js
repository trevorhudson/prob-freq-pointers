'use strict';

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  if (word === '') return true;
  if (letters === '') return false;

  const wordCounter = frequencyCounter(word);
  const letterCounter = frequencyCounter(letters);

  for (let key in wordCounter) {
    if (letterCounter[key] < wordCounter[key]) return false;
  }
  return true;
}

function frequencyCounter(string) {
  const counter = {};

  for (let char of string) {
    if (char in counter) {
      counter[char]++;
    }
    else counter[char] = 1;
  }
  return counter;
}



// accepts two strings (words) (letters)
// returns true if word can be be built from the letters
// all letters are lowercase (no spaces or puncturation);
// constraint O(n);

// frequency counter

// function for creating counters;

// function compare keys;

