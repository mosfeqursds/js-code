//  A constructor is a special function that creates and initializes an object instance of a class.
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myInfo = new Person("blue", " ",50, "blue");

// Display age
document.getElementById("demo").innerHTML = "My info is " + myInfo.age + ".";
