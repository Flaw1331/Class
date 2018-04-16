// Array of names
const names = ["Jane", "John", "Jimbo", "Jedediah"];

// Slices first two names
const left = names.slice(0, 2);
console.log(left);

// Slices last two names and return
const right = names.slice(2, 4);
console.log(right);

// Sorts descending
[3, 2, -120].sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, -120)
 return secondNum - firstNum;
});


// Sorts ascending
[3, 2, -120].sort(function compareFunction(firstNum, secondNum) {
 // resulting order is (-120, 2, 3)
 return firstNum - secondNum;
});


