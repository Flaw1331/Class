// Callbacks

function greet(name, callback) {
  callback(name);
  console.log('-----');
}

let shoutName = function(name) {
  console.log(name.toUpperCase());
};
let printName = function(name) {
  console.log(name);
};


greet('Joe', printName);
greet('Joe', shoutName);

// let person = prompt("Please enter your name:", "Name");
// greet(person, printName);