"use strict";

// add whatever parameters you deem necessary & write docstring
function averagePair(array, target) {
  let left = 0;
  let right = array.length - 1;

  if (!target) return false;

  while (left < right) {
    const average = averageSum(array[left], array[right]);
    if (average === target) {
      return true;
    } else if (average < target) {
      left++;
    } else right--;
  }
  return false;
}

// Inputs are array and target average
// Function to see if pair matches target average
// Can have more than one pair which matches
// Time complexity should be O(n)

// Function to determine average between two numbers

function averageSum(num1, num2) {
// Will return average sum of two numbers
return (num1 + num2) / 2;
}

// Should start from either end of array (left, right) and move towards middle
// Will use while loop as long as average does not equal target
// If average of pairs is less than target, increment left index
// If average of pairs is more than target, decrement right index