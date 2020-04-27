const test = new Function("a", "b", "return a+b");
console.log(test(1, 2));
const a = 5;
const b = "Myname";

function addTwoNumbers(x, y) {
  return x + y;
}

console.log("lastname");

console.log(addTwoNumbers(2, 3));

const add = function (a, b) {
  return a + b;
};

// otherFunc(function (x,y)(.......))

function Myfunc() {
  anotherFunc(); // ok, anotherFunc is hoisted
  function anotherFunc() {
    return console.log("Hello");
  }
}

var arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0]);
console.log(arr[3]);

arr[3] = "x";
console.log(arr);

console.log(arr.length);

const arr1 = ["Name", "lastname"];

console.log(arr1.length);

console.log(1 in arr);

console.log(6 in arr);

var exampleArray = [];

exampleArray.test = 111;

console.log(exampleArray.test);

console.log(arr.slice(1, 2));
console.log(arr);

const names = ["Bob", "Chris", "John", "Dan"];

console.log(names.pop()); // Removes last item in array
console.log(names.push("Jordan")); // Adds an item to the end of array
console.log(names);

// Merge two arrays arr and names

console.log(arr.concat(names));

names.forEach((name) => console.log(name));

const firstValue = names.shift();
console.log(firstValue);
console.log(names);

console.log(names.unshift("Henry"));
console.log(names);

const MMM = names.reverse();
console.log(MMM);

console.log(names.indexOf("John"));

console.log(names.join("|"));

console.log(arr.join());

//map() reduce() splice()

const newArr = arr.map((num) => num * 4);
console.log(newArr);
// NaN is because there is a string in the array 'arr'

//Reduce
var sum = [0, 1, 2, 3];

sum.reduce((a, b) => {
  return a + b;
}, 0);

//Splice
console.log(names)
console.log(names.splice(1, 2, "Luke"));
