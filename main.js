/* const hello = "hello";

hello = "world";

let letVariable = "hello";

letVariable = 12;
letVariable = "world";
letVariable = "";
 */

/* (function getLaptop() {
  var laptop = "laptop";
  let laptopLet = "laptopLet";
  console.log(this);
})();

const getLaptopArrow = () => {
  let laptopArrow = "arrow";
  return varLaptop;
};

let number = '1';
let number2 = 1;

number == number2; // true
number === number2 // false
 */

// Number, string, null, undefined, object, symbol, bigint, boolean

const Person = {
  name: "kiko",
};

function PersonFunction(name) {
  var laptop = "laptop";
  this.name = name;

  // Inside the function, you can access laptop
  console.log("Inside function: " + laptop);
}

// Outside the function, laptop is not accessible
const angel = new PersonFunction("Angel");
console.log("Outside function: " + angel.name); // This will work
console.log("Outside function: " + laptop); // This will throw a ReferenceError

// So the reason it did not work is I tried to log the var outside of the function
// I guess that if i were to have a main function, then it would still only be defined 
// within the PersonFunction and all of it's children




