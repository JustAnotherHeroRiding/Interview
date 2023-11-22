/* # Interview
- Fundamentals of Javascript
- declaring objects
- functions
- syntax
- arrays
- types
- OOP in Js
- prototypes
- Typescript
- algorithm exercise
- access modifiers
- function class or something else when given an exercise
- html and css 
- event listeners
- event delegation and propagation
 */

/* ### 1. Fundamentals of JavaScript

- **Explanation:** Covers basic concepts like variables, data types, control structures, and syntax.
- **Code Example:**  */

// Variables
let personName = "John"; // 'let' allows you to reassign values
const age = 30; // 'const' is for values that should not be reassigned

// Data Types
const isAdult = true; // Boolean
let height; // Undefined
const hobbies = ["Reading", "Cycling"]; // Array
const address = { city: "New York", country: "USA" }; // Object
let dynamicVar = "Hello"; // Variables in JS can change types
dynamicVar = 5; // Now a Number

// Quirks and Features
if (age > 18) {
  console.log(`${personName} is an adult.`); // Template literals for string interpolation
}

// Type Coercion
if (2 == "2") {
  // == performs type coercion, considers these equal
  console.log("Type coercion makes these equal.");
}

if (2 === "2") {
  // === does not perform type coercion, these are not equal
  console.log("This will not be executed.");
}

// Hoisting
console.log(undeclaredVar); // Outputs 'undefined' instead of throwing an error
var undeclaredVar = "This is hoisted"; // 'var' declarations are hoisted

// Function Scoping
if (true) {
  var scopedVar = "I am not block scoped";
}
console.log(scopedVar); // 'var' is function-scoped, not block-scoped

// Let and Const are block-scoped
if (true) {
  let blockScopedVar = "I am block scoped";
  const anotherBlockScopedVar = "So am I";
}
// console.log(blockScopedVar); // Would throw an error, as let and const are block-scoped

// Functions are first-class objects
function greetingName(name) {
  return `Hello, ${name}!`;
}
console.log(greetingName("Alice"));

// Arrow functions with implicit return
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));

// Asynchronous behavior
setTimeout(() => console.log("This appears after 1 second"), 1000);

/* ### 2. Declaring Objects

- **Explanation:** Objects in JavaScript are collections of key-value pairs.
- **Code Example:* */

const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345,
  },
  hobbies: ["reading", "cycling"],
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  },
};

console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

person.email = "alice.smith@example.com"; // Adding a new property
person.age = 26; // Modifying an existing property

delete person.age; // Removing a property

person.greet(); // Calling the greet method

console.log(person.address.street); // Accessing a property in a nested object

function PersonFuncClass(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  };
}

const bob = new PersonFuncClass("Bob", "Johnson");
bob.greet();

class PersonEs6 {
  firstName: string;
  lastName: string;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  }
}

const alice = new PersonEs6("Alice", "Smith");
alice.greet();

const { firstName, lastName } = person;
console.log(firstName, lastName);

const updatedPerson = { ...person, age: 26 }; // Creating a new object with an updated age

/* ### 3. Functions

- **Explanation:** Functions are blocks of code designed to perform a particular task.
- **Code Example:** */

function greet(personName) {
  return "Hello " + personName;
}

/* ### 4. Syntax

- **Explanation:** JavaScript syntax includes rules for writing valid code, like statement termination with semicolons, and using curly braces for blocks.
- **Code Example:** */

let condition = null;
if (condition) {
  // code block }
  console.log(condition);
}

// ### 5. Arrays

/* Arrays are declared using square brackets [], and the values are comma-separated.
Example:
*/
let fruits = ["Apple", "Banana", "Cherry"];
/* Array Properties 
length: Returns the number of elements in an array.
Example:
*/

console.log(fruits.length); // 3

/* Common Array Methods 

push() and pop(): Add and remove elements from the end of an array.
*/

fruits.push("Orange"); // Adds "Orange" to the end

fruits.pop(); // Removes the last element

/* shift() and unshift(): Add and remove elements from the beginning of an array. */

fruits.shift(); // Removes the first element
fruits.unshift("Strawberry"); // Adds "Strawberry" to the beginning

/* map(): Creates a new array with the results of calling a provided function on every element. */
const lengths = fruits.map((fruit) => fruit.length);

/* filter(): Creates a new array with all elements that pass the test implemented by the provided function. */
const longFruits = fruits.filter((fruit) => fruit.length > 5);

/* find() and findIndex(): Return the value of the first element that satisfies 
the provided testing function. findIndex() returns the index instead. */
const bananaIndex = fruits.findIndex((fruit) => fruit === "Banana");

/* forEach(): Executes a provided function once for each array element. */
fruits.forEach((fruit) => console.log(fruit));
/* reduce(): Applies a function against an accumulator and each element to reduce it to a single value. */

const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
const sumOfLetters = fruits.reduce(
  (accumulator, fruit) => accumulator + fruit.length,
  0
);

/* slice() and splice(): slice() returns a shallow copy of a portion of an array,
 while splice() changes the contents by removing or replacing existing elements and/or adding new ones. */

const firstTwo = fruits.slice(0, 2); // Gets the first two fruits
fruits.splice(1, 1, "Mango"); // Replaces 1 element at index 1

/* Are Arrays Objects?
Yes, in JavaScript, arrays are a type of object. 
They are special because they offer additional methods for working with ordered collections 
of data and have a special length property that tracks the number of items in the array. 
This is why arrays can have properties and methods, just like any other object. */

/* Array as Object Example: */

//fruits.property = "value"; // You can add properties to an array
console.log(Array.isArray(fruits)); // true - to check if it's an array
console.log(typeof fruits); // "object"

/* ### 6. Types

/* JavaScript Data Types
1. Number 
Description: Represents both integer and floating-point numbers. There's no separate integer type.
Example:
*/
let num1 = 5; // Integer
let num2 = 5.5; // Floating point
let num3 = 1.6e3; // Scientific notation (1600)
/* 2. String
Description: Represents textual data. Strings in JavaScript are immutable.
Example:
*/
let greetingWorld = "Hello World"; // Double quotes
let answer = "42"; // Single quotes
let phrase = `Life, Universe, and Everything`; // Template literals
/* 3. Boolean
Description: Represents a logical entity with two values: true and false.
Example:
*/
let isAvailable = true;
let isComplete = false;
/* 4. Undefined 
Description: A variable that has been declared but not assigned a value is of type undefined.
Example:
*/
let resultUndefined;
console.log(resultUndefined); // undefined
/* 5. Null
Description: Represents the intentional absence of any value. It is usually assigned to a variable as a representation of 'no value'.
Example:
*/
let emptyValue = null;
/* 6. Object 
Description: Represents instances of data collections and more complex entities. Objects in JavaScript can be seen as a collection of properties.
Example:
*/
let personObject = { name: "Alice", age: 25 };
/* 7. Symbol (ES6)
Description: A unique and immutable primitive introduced in ES6, used mainly as the key of an object property.
Example:
*/
let sym = Symbol("description");
/* 8. BigInt (ES2020)
Description: An arbitrary-precision integer. Useful when dealing with extremely large numbers.
Example:
*/
let largeNumber = BigInt(9007199254740991);

/* /### 7. OOP in JavaScript
 - **Explanation:** O bject-Oriented Programming in JavaScript can be achieved using prototypes, classes, and objects.
 - **Code Example:**     
     */
/*  Object-Oriented Programming (OOP) in TypeScript is a programming paradigm based on the concept of "objects,"
 which can contain data and code: data in the form of fields (often known as attributes or properties), and code, 
 in the form of procedures (often known as methods).

 TypeScript enhances OOP in JavaScript by adding features such as static type checking,
  interfaces, and more traditional OOP syntax, making it more similar to languages like Java or C#. 
  Let's delve into some of these features:
 
 1. Classes
 Classes are the central feature of OOP in TypeScript. They are a template for creating objects.
 
 Example: */
class Car {
  brand: string; // Property declaration with type annotation

  constructor(brand: string) {
    // Constructor with parameter type
    this.brand = brand;
  }

  display(): void {
    // Method with return type annotation
    console.log(`This car is a ${this.brand}.`);
  }
}

const myCar = new Car("Toyota");
myCar.display(); // Output: This car is a Toyota.
/* 2. Inheritance
 TypeScript supports the concept of inheritance. A class can extend another class, inheriting its properties and methods.
 Example: */
class ElectricCar extends Car {
  range: number;

  constructor(brand: string, range: number) {
    super(brand); // Call the constructor of the parent class
    this.range = range;
  }

  displayRange(): void {
    console.log(`This ${this.brand} has a range of ${this.range} miles.`);
  }
}

const myElectricCar = new ElectricCar("Tesla", 300);
myElectricCar.display(); // Inherited method
myElectricCar.displayRange(); // Output: This Tesla has a range of 300 miles.
/*  3. Encapsulation
 Encapsulation means restricting direct access to some of an object's components, 
 which is a good way to prevent external code from interfering with the internal state of the object.
 
 Example: */
class PersonTS {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const personTS = new PersonTS("Alice");
console.log(personTS.getName()); // Alice
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.
/*  4. Interfaces
 Interfaces in TypeScript are used to define the structure of an object. 
 They are a powerful way of defining contracts within your code and contracts with code outside of your project.
 
 Example: */
interface Vehicle {
  brand: string;
  display(): void;
}

class Bike implements Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  display(): void {
    console.log(`This bike is a ${this.brand}.`);
  }
}

const myBike = new Bike("Yamaha");
myBike.display(); // Output: This bike is a Yamaha.
/* 5. Polymorphism
 Polymorphism in OOP allows objects of different classes to be treated as objects of a common super class. 
 The most common use of polymorphism is when a parent class reference is used to refer to a child class object.
 
 Example: */
class Animal {
  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

let pet: Animal;
pet = new Dog();
pet.makeSound(); // Output: Bark

/* ### 8. Prototypes

/* In JavaScript, prototypes are a fundamental and powerful part of the language, central to 
implementing inheritance and shared properties or methods. Every JavaScript function and object has a 
prototype property that is part of the internal structure of the function or object. This concept predates the 
introduction of classes in ES6 and is crucial for understanding how inheritance works in JavaScript.

Understanding Prototypes
Prototype Chain
Every object in JavaScript has a property named __proto__ (or [[Prototype]] in specification terms),
 which points to its prototype object. The prototype object itself is an object and therefore has its own prototype, 
 forming what is known as the "prototype chain". When a property or method is accessed on an object, JavaScript first 
 looks at its own properties. If it doesn't find it there, it looks at the properties of its prototype, and so on up the 
 chain until it either finds the property or reaches the end of the chain.
Prototype and Constructor Functions
Constructor functions (like your Person example) use the prototype property to define methods and properties that will be 
shared by all instances of the class created with that constructor function.
Example Expanded: */
function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.greet = function () {
  return "Hello " + this.name;
};


const aliceProto = new PersonProto("Alice");
const bobProto = new PersonProto("Bob");

console.log(aliceProto.greet()); // "Hello Alice"
console.log(bobProto.greet()); // "Hello Bob"
/* In this example, alice and bob are different instances of Person, but they share the same greet method through their prototype.

Prototype vs Class Syntax
With the introduction of class syntax in ES6, prototypes can be handled in a more abstract and easier-to-understand manner. However, under the hood, the class syntax is essentially syntactic sugar over the existing prototype-based inheritance.

Class Syntax Equivalent: */

class PersonClass {
  name: string;
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const aliceClass = new PersonClass("Alice");
console.log(aliceClass.greet()); // "Hello Alice"
/* Modifying Prototypes
Prototypes can be modified at runtime, allowing you to add new methods or properties to all instances of a class. However, modifying prototypes is generally discouraged, especially modifying the prototypes of standard JavaScript objects like Object or Array, as it can lead to unexpected behavior and conflicts in code.
Example of Prototype Modification: */

PersonProto.prototype.sayGoodbye = function () {
  return "Goodbye!";
};

console.log(aliceProto.sayGoodbye()); // "Goodbye!"

/* ### 9. TypeScript

- **Explanation:** A superset of JavaScript that adds static types.
- **Code Example:** */

let isDone: boolean = false;

/* ### 10. Algorithm Exercise

- **Explanation:** This often involves solving a problem or performing a calculation using JavaScript.
- **Code Example:** */

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

/* ### 11. Access Modifiers

TypeScript, unlike JavaScript, supports access modifiers on class properties and methods. These access modifiers control the visibility and accessibility of class members (properties and methods). There are three primary access modifiers in TypeScript: public, private, and protected.

/* 1. Public
Description: By default, all class members in TypeScript are public. Public members can be accessed from anywhere without any restrictions.
Example: */
class UserPublic {
  public age: number;
  constructor(name: string, age: number) {
    this.age = age;
  }
}
const userPublic = new UserPublic("Alice", 25);
console.log(userPublic.age); // Accessible
/* 2. Private
Description: Private members can only be accessed within the class that defines them. This is useful for hiding the internal state or implementation details of a class.
Example: */
class UserPrivate {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}
const userPrivate = new UserPrivate("Bob");
console.log(userPrivate.getName()); // Accessible through a public method
// console.log(user.name); // Error: 'name' is private and only accessible within class 'User'.
/* 3. Protected
Description: Protected members are similar to private ones, but they can also be accessed 
within deriving classes (subclasses). This is useful for situations where you want to allow access to members
 from subclasses but not from the outside world.
Example: */
class User {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Admin extends User {
  public getName(): string {
    return `Admin name: ${this.name}`;
  }
}
const admin = new Admin("Charlie");
console.log(admin.getName()); // Accessible
// console.log(admin.name); // Error: 'name' is protected and only accessible within class 'User' and its subclasses.

/* Additional Points
No Access Modifiers in JavaScript: It's important to remember that these access modifiers are a TypeScript feature. 
In plain JavaScript, there's no built-in way to enforce public, private, or protected access, though private class fields 
(marked with #) are a recent addition.
Use in Interfaces: TypeScript interfaces cannot include access modifiers. All members of an interface are implicitly public.
Access Modifiers and Inheritance: Private members are not visible to subclasses, while protected members are. 
This distinction is crucial for object-oriented design and inheritance patterns.
 */
/* ### 12. Choosing Function, Class, or Something Else

- **Explanation:** Deciding whether to use a function, class, or other construct depends on the specific needs like reusability, encapsulation, etc.
- **Code Example:** Depends on specific use-case. */

/* TypeScript extends the capabilities of JavaScript classes with several additional 
keywords and modifiers that offer more control over the behavior of class members. Besides public, private, and protected, 
there are other important keywords like static, readonly, abstract, and more. Let's go over each of these:
 */
/* 1. Static
Description: The static keyword is used to define class-level properties and methods, which belong 
to the class itself rather than to instances of the class.
Example: */
class MyClass {
  static staticProperty = "I belong to the class!";
  static staticMethod() {
    return "I'm a static method!";
  }
}
console.log(MyClass.staticProperty); // Accessed directly via the class
console.log(MyClass.staticMethod());

/* When you use static properties or methods in a class, it's important to understand that they are associated with the class itself, not with the instances of the class. This distinction has several implications:

Changing Static Property: If you change a static property, it does not affect the state of any already created instances of the class, because the property is not tied to any individual instance. It is shared across all instances and even accessible without creating any instances.

Accessing Static Property: Static properties and methods are accessed directly on the class, not on instances of the class. So, if you change a static property, that change is reflected when you access it from the class itself, not from an instance.

Example Demonstration
Consider the following example:
 */

class MyStaticClass {
  static staticProperty = "Initial Value";

  constructor() {
    console.log(MyClass.staticProperty); // Accessing static property
  }
}

const instance1 = new MyStaticClass(); // Outputs "Initial Value"
MyStaticClass.staticProperty = "Changed Value";

const instance2 = new MyClass(); // Outputs "Changed Value"
console.log(MyClass.staticProperty); // Outputs "Changed Value"

// Both instance1 and instance2 do not have their own copy of staticProperty.
/* In this example:

Changing MyClass.staticProperty after instance1 is created does not affect instance1, because staticProperty is not a property of instance1 but of MyClass.
When instance2 is created, it sees the updated value of staticProperty because this property is shared across the class.
If you were to create methods or properties within MyClass that relied on staticProperty, 
they would also see its current value at the time they are called, not the value it had when the instance was created. */

/* 2. Readonly
Description: The readonly keyword is used to make a property immutable once it is set,
 often used in conjunction with public, private, or protected.
Example: */
class UserReadOnlys {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
const UserReadOnly = new UserReadOnlys(123);
// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.

/* 3. Abstract
Description: The abstract keyword is used to define abstract classes and abstract methods within those classes.
 Abstract classes are base classes from which other classes may be derived, but they cannot be instantiated directly.
  Abstract methods must be implemented by derived classes.
Example: */
abstract class AnimalAbstract {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving along!");
  }
}
class DogAbstract extends AnimalAbstract {
  makeSound() {
    console.log("Woof! Woof!");
  }
}
// const myAnimal = new Animal(); // Error: Cannot create an instance of an abstract class.
const myDog = new DogAbstract();
myDog.makeSound(); // Implemented abstract method
myDog.move(); // Inherited non-abstract method
/* 4. Getters and Setters
Description: Getters and setters are special methods that provide read and write access to a property of an object.
Example: */
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }

  set width(value: number) {
    this._width = value;
  }

  set height(value: number) {
    this._height = value;
  }
}
const rect = new Rectangle(10, 20);
console.log(rect.area); // 200
rect.width = 30;
console.log(rect.area); // 600
/* 5. Optional Properties
Description: Properties in TypeScript classes can also be marked as optional, meaning they may or may not be defined.
Example: */
class OptionalProperties {
  optional?: string;
}
const obj = new OptionalProperties();
console.log(obj.optional); // undefined

/* ### 13. HTML and CSS

- **Explanation:** Basics of webpage structure (HTML) and styling (CSS).
- **Code Example:** */

const html = () => {
  return `<div class="container">Hello World</div>
            
            .container {     color: blue; }`;
};

/* ### 14. Event Listeners

/* Understanding Event Listeners
Adding Event Listeners:

The addEventListener method is used to set up a function to be called whenever the specified event is delivered to the target.
Syntax: target.addEventListener(event, function, useCapture);
event: The name of the event (like "click", "mouseover").
function: The function that gets executed when the event occurs.
useCapture (optional): A boolean value that indicates whether the event should 
be captured in the capturing phase (true) or in the bubbling phase (false). */

document.getElementById("myBtn")?.addEventListener("click", function() {
    alert("Button clicked!");
});


/* Understanding Event Listeners
Adding Event Listeners:

The addEventListener method is used to set up a function to be called whenever the specified event is delivered to the target.
Syntax: target.addEventListener(event, function, useCapture);
event: The name of the event (like "click", "mouseover").
function: The function that gets executed when the event occurs.
useCapture (optional): A boolean value that indicates whether the event 
should be captured in the capturing phase (true) or in the bubbling phase (false). */

document.getElementById("myBtn")?.addEventListener("click", function() {
    alert("Button clicked!");
});

/* Event Object:

Event listeners can receive an event object argument, which contains information about the event, 
such as the target element, the type of the event, and more. */
document.getElementById("myBtn")?.addEventListener("click", function(event) {
    console.log("Clicked element:", event.target);
});
/* Removing Event Listeners:

Use removeEventListener to stop listening to an event on the element. 
The parameters need to match those used with addEventListener.
Syntax: target.removeEventListener(event, function, useCapture); */
function handleClick2() {
    alert("Button clicked!");
}
document.getElementById("myBtn")?.addEventListener("click", handleClick2);
// Later on, to remove the event listener
document.getElementById("myBtn")?.removeEventListener("click", handleClick2);

/* Event Propagation (Bubbling and Capturing):

Events in the DOM can propagate in two ways: bubbling and capturing.
In the bubbling phase, the event starts from the target element and bubbles up the DOM tree.
In the capturing phase, the event starts from the top of the DOM tree and goes down to the target element.
You can control this behavior using the useCapture parameter in addEventListener.
Event Delegation:

Instead of adding an event listener to each individual element, 
you can add a single event listener to a parent element and use event propagation to 
handle events from child elements — a concept known as event delegation.
This is particularly useful for handling events on dynamic content 
(elements that are added to the DOM at a later time). */

document.getElementById("parent")?.addEventListener("click", function(event) {
    const target = event.target as HTMLElement
    if (target.tagName === 'BUTTON') {
        console.log("Button inside parent clicked:", target);
    }
});

/* Default Action and preventDefault:

Many events have a "default action" associated with them. For example, 
clicking on a link navigates to a new page. You can prevent these default actions using the event.preventDefault() method.
javascript
Copy code */
document.querySelector("a")?.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click prevented!");
});
/* Event Object:

Event listeners can receive an event object argument, 
which contains information about the event, such as the target element, the type of the event, and more.
 */
document.getElementById("myBtn")?.addEventListener("click", function(event) {
    console.log("Clicked element:", event.target);
});
/* Removing Event Listeners:

Use removeEventListener to stop listening to an event on the element.
 The parameters need to match those used with addEventListener.
Syntax: target.removeEventListener(event, function, useCapture); */
function handleClick() {
    alert("Button clicked!");
}
document.getElementById("myBtn")?.addEventListener("click", handleClick);
// Later on, to remove the event listener
document.getElementById("myBtn")?.removeEventListener("click", handleClick);
/* Event Propagation (Bubbling and Capturing):

Events in the DOM can propagate in two ways: bubbling and capturing.
In the bubbling phase, the event starts from the target element and bubbles up the DOM tree.
In the capturing phase, the event starts from the top of the DOM tree and goes down to the target element.
You can control this behavior using the useCapture parameter in addEventListener.
Event Delegation:

Instead of adding an event listener to each individual element, you can add a 
single event listener to a parent element and use event propagation to handle events from child elements —
 a concept known as event delegation.
This is particularly useful for handling events on dynamic content (elements that are added to the DOM at a later time).
 */
document.getElementById("parent")?.addEventListener("click", function(event) {
  const target = event.target as HTMLElement
    if (target.tagName === 'BUTTON') {
        console.log("Button inside parent clicked:", event.target);
    }
});
/* Default Action and preventDefault:

Many events have a "default action" associated with them. For example, 
clicking on a link navigates to a new page. You can prevent these default actions using the event.preventDefault() method. */
document.querySelector("a")?.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click prevented!");
});

/* ### 15. Event Delegation and Propagation

- **Explanation:** Event delegation is a technique of handling events at a higher level in the DOM than the element on which the event originated. Event propagation is the way events propagate through the DOM.
- **Code Example:**
     */

document.getElementById("parent")?.addEventListener("click", function (e) {
  // Type assertion to HTMLElement
  const target = e.target as HTMLElement;
  if (target && target.nodeName === "LI") {
    console.log("List item clicked!");
  }
});



/* Bubbling is the default way of event propagation in JavaScript. When an event is fired on an element,
 it first occurs on that exact element, then bubbles up the DOM tree, triggering handlers on each parent 
 element up to the root, unless it's explicitly stopped.

Here's a simple overview of how bubbling works:

Event Occurrence: The event occurs on the target element.
Bubbling Up: The event then bubbles up the DOM tree. This means it will first trigger any handlers on the target element, then on its parent, and so on upwards until it reaches the document object, unless event.stopPropagation() is called.
Handling at Each Level: If any parent elements have an event listener attached for the same event, those listeners get executed.
Example of Event Bubbling
Suppose you have a button inside a div, and both elements have click event listeners attached: */

/* <div id="myDiv" onclick="console.log('Div clicked')">
  <button id="myButton" onclick="console.log('Button clicked')">Click Me</button>
</div> */
/* When the button is clicked:

First, the click event on the button is handled, logging "Button clicked".
Then, the event bubbles up to the div, and its click handler is executed, logging "Div clicked".
Stopping Bubbling
If you want to stop the event from bubbling up the DOM tree, you can use event.stopPropagation() in the event handler:
 */

document.getElementById("myButton")?.addEventListener("click", function(event) {
    console.log('Button clicked');
    event.stopPropagation(); // This stops the event from bubbling up further
});

/* In this case, clicking on the button will log "Button clicked" but will not trigger the div's onclick event handler.

Capturing Phase
In addition to bubbling, there is also a capturing phase. This phase is the opposite 
of bubbling; events are first captured down to the target element and then bubble up. 
Capturing is not used as commonly as bubbling. You can set an event listener to trigger 
during the capturing phase by setting the third argument of addEventListener to true. */

document.getElementById("myDiv")?.addEventListener("click", function() {
    console.log('Div clicked during capturing');
}, true); // The 'true' here sets the listener to the capturing phase
/* In practice, event capturing is less frequently used, and the majority
 of event handling occurs in the bubbling phase. Understanding both phases, however, is crucial for a
  complete understanding of event handling in JavaScript.
 */
/* ### 16. Async/Await and Promises

- **Explanation:** Async/Await and Promises are used for handling asynchronous operations in JavaScript. Promises represent a value that may be available now, in the future, or never. Async/await is syntactic sugar over Promises, making asynchronous code easier to write and read.
- **Code Example:** */

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/* ### 17. Error Handling

- **Explanation:** Error handling in JavaScript is done using `try...catch` blocks.
 This allows you to catch errors thrown in synchronous code and deal with them in a controlled way.
- **Code Example:** */

const riskyOperation = () => {
  return Math.random();
};
try {
  // Code that may throw an error
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:", error);
}

/* ### 18. ES6 Features

- **Arrow Functions:** Provide a more concise syntax for writing function expressions. */

const add = (a, b) => a + b;

/* - **Template Literals:** Allow for string interpolation and multiline strings.
 */

let greeting = `Hello, ${personName}!`;

/*  - **Destructuring Assignment:** Makes it possible to unpack values from arrays or properties from objects.
 */

const { firstName, lastName } = person;

/* - **Default Parameters:** Provide default values for function parameters.
 */
function greetGuest(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

/* ### 19. Web APIs
 */
/* - **Explanation:** Web APIs provide interfaces to a wide range of useful functionality built into the browser, like making HTTP requests, manipulating the document object model (DOM), storing data, etc.
- **Code Example (Using `fetch` API):** */

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

/* Arrow Vs normal functions
Arrow functions, introduced in ES6, are a more concise way of writing functions in JavaScript, and they differ from traditional function expressions in several key ways. Below, I'll outline these differences with examples.

1. Syntax
Traditional Function:

javascript
Copy code
function add(a, b) {
    return a + b;
}
Arrow Function:
 */
const add2 = (a, b) => a + b;
/* Explanation: Arrow functions allow for a shorter syntax. When there's a 
single expression in the function body, curly braces and the return statement can be omitted.
 */
/* 2. this Binding
Traditional Function: */

function CounterFunc() {
  this.count = 0;
  setInterval(function () {
    this.count++;
    console.log(this.count);
  }, 1000);
}
new CounterFunc(); // NaN, because 'this' refers to the function scope
/* Arrow Function:*/

function CounterArrow() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
new CounterArrow(); // Correctly increments count
/* Explanation: In traditional functions, this refers to the context in which the 
function was called. In arrow functions, this is lexically bound; it refers 
to the context of the enclosing function.

3. Constructors
Traditional Function: */

function CarFunc(model) {
  this.model = model;
}
let myCarFunc = new CarFunc("Ford");
/* Arrow Function:
 */

const CarArrow = (model) => {
  this.model = model; // Error: Arrow functions cannot be used as constructors
};
let myCarArrow = new Car("Ford"); // TypeError
/* Explanation: Arrow functions cannot be used as constructors and will throw an error if used with new.
 */
/* 4. arguments Object
Traditional Function:
 */

function concatenateArray() {
  return Array.prototype.join.call(arguments, " ");
}
/* console.log(concatenateArray('Hello', 'World')); */ // "Hello World"
/* Arrow Function:
 */
/* const concatenateArrow = () => {
    return Array.prototype.join.call(arguments, ' '); // Error: 'arguments' is not defined
}
console.log(concatenateArray('Hello', 'World')); */
/* Explanation: Arrow functions do not have their own arguments object. 

If arguments is needed, rest parameters can be used instead.
 */
/* 5. Method Definitions in Objects
Traditional Function: */

const objFunc = {
  count: 0,
  increment: function () {
    this.count++;
  },
};
objFunc.increment();
console.log(objFunc.count); // 1
//Arrow Function:

const objArrow = {
  count: 0,
  increment: () => {
    this.count++;
  },
};

objArrow.increment();
console.log(objArrow.count); // NaN or error because 'this' does not refer to 'obj'
/* Explanation: When used as methods in objects, 
arrow functions do not bind their own this, which might lead to unexpected behavior if this is used within the method.s  */
