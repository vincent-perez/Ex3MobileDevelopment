//3.1 flattening(list)

//build an array of multiple arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

//create the function "flattening" and export it
export function flattening(list) {
    return list.reduce((flat, current) => flat.concat(current), []);
  }
//pass in flat (accumulated value) and current (value being processed) into a list reduce. Use concat to concatenate the flat array with the current array, then pass into []

  console.log(flattening(arrays));
//print to console

//3-2 loop(value, test, update, body)
export function loop(value, test, update, body) { //value is the start value, test is a function that returns a boolean, update returns a new value for next iteration, body logs it
    for (let currentValue = value; test(currentValue); currentValue = update(currentValue)) {
      body(currentValue);
    }
  }
  loop(3, n => n > 0, n => n - 1, console.log);
    // → 3
    // → 2
    // → 1

//3-3 everyLoop(array, test) and 3-4. everySome(array, test)
//create loop and test conditions as well as iteration
export function everyLoop(array, test) {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
        return false;
      }
    }
    return true;
  }
  
  export function everySome(array, test) {
    return !array.some(element => !test(element));
  }
  
  console.log(everyLoop([1, 3, 5], n => n < 10));
  // → true
  console.log(everyLoop([2, 4, 16], n => n < 10));
  // → false
  console.log(everyLoop([], n => n < 10));
  // → true
  