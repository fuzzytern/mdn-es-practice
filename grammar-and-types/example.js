'use_strict';

/**
 * PART I: var, let and const
 */

// - Exercise 0 - var scope
var exercise0 = function () {

  var v = 1;

  if (true) {
    var v = 2;
  }

  var answer = 2; // TODO - Replace undefined with the correct value of `v` (1 or 2)

  // No changes below that point
  console.log(`[${(v === answer ? "PASS" : "FAIL")}] - Exercise 0`);

}

// - Exercise 1 - let scope
var exercise1 = function () {

  let v = 1;

  if (true) {
    let v = 2;
  }

  var answer = 1; // TODO - Replace undefined with the correct value of `v` (1 or 2)

  // No changes below that point
  console.log(`[${(v === answer ? "PASS" : "FAIL")}] - Exercise 1`);

}

// - Exercise 2 - const scope
var exercise2 = function () {

  // TODO - This function is raising an exception. Try to guess which before running the function, then change one line to make the test it pass according to the given `condition`.

  const v = 1; // Do not change this line

  if (true) {
    var w;
    const v = 2;
    w = v;
  }

  // No changes below that point
  let condition = (v === 1 && w === 2);
  console.log(`[${( condition ? "PASS" : "FAIL")}] - Exercise 2`);

}

// TODO - Uncomment the function calls as you pass the test
exercise0();
exercise1();
exercise2();
