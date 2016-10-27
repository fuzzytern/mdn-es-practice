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

  var result = 2; // TODO - Replace undefined with the correct value of `v` (1 or 2)

  // No changes below that point
  console.log(`[${(v === result ? "PASS" : "FAIL")}] - Exercise 0`);

}

// - Exercise 1 - let scope
var exercise1 = function () {

  let v = 1;

  if (true) {
    let v = 2;
  }

  var result = 1; // TODO - Replace undefined with the correct value of `v` (1 or 2)

  // No changes below that point
  console.log(`[${(v === result ? "PASS" : "FAIL")}] - Exercise 1`);

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

// - Exercise 3 - Objects & const
var exercise3 = function () {
  // TODO - Perform any change required to this code so that it doesn't raise "TypeError: Assignment to constant variable."
  // TODO - Refactor this code.
  const obj = {one: "one", two: "two"};
  obj.one = 1;
  obj.two = 2;
  obj = Object.assign(obj, {three: 3});

  let result = obj;

  // No changes below that point
  let condition = (JSON.stringify(obj) === JSON.stringify({one: 1, two: 2, three: 3}));
  console.log(`[${( condition ? "PASS" : "FAIL")}] - Exercise 3`);
}

// - Exercise 4 - Objects & const
var exercise4 = function () {
  // TODO - Identify lines potentially raising TypeError exceptions and fix them
  // TODO - Refactor this code (use only one variable).
  const arr = ["zero","one","two"]
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  arr = arr.concat([3])

  let result = arr;

  // No changes below that point
  let condition = (JSON.stringify(arr) == '[0,1,2,3]');
  console.log(`[${( condition ? "PASS" : "FAIL")}] - Exercise 3`);
}

// TODO - Uncomment the function calls as you pass the test
exercise0();
exercise1();
exercise2();
exercise3();
exercise4();
