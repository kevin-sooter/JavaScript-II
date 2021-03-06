const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

firstItem(items, function(first) {
  console.log(first);
});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function add(x, y) {
  console.log(x + y);
}

console.log(sumNums(3, 4, add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(x, y) {
  console.log(x * y);
}

multiplyNums(5, 4, multiply);

/* STRETCH PROBLEM */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // Use indexOf
  // https://devdocs.io/javascript/global_objects/array/indexof
  // https://devdocs.io/javascript/global_objects/array/includes
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  //
  // var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]; 
  // var uniq = array.reduce(function(a,b){
  // if (a.indexOf(b) < 0 ) a.push(b);
  //return a;
  //},[]);
  return names.reduce((a, b) => (a.indexOf(b) < 0 ? a.push(b) : a), []);
  // const newSet = new Set(array)
  // var uniq = [ ...newSet ];
  return cb([...new Set(array)]);
}
var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];
removeDuplicates(names);

const fixCase = str =>
  str
    .split('')
    .reduce(
      (acc, char, idx) =>
        idx === 0 ? char.toUpperCase() : `${acc}${char.toLowerCase()}`,
      ''
    );
