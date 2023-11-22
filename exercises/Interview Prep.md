# Interview
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
- this keyword
- event bubbling



### 1. Fundamentals of JavaScript

- **Explanation:** Covers basic concepts like variables, data types, control structures, and syntax.
- **Code Example:** 
```
let name = John; // Variable declaration
const age = 30; // Constant declaration
if (age > 18) { //If else check
console.log(name + " is an adult.");
}
```

### 2. Declaring Objects

- **Explanation:** Objects in JavaScript are collections of key-value pairs.
- **Code Example:*
```
  const person = {     name: "Alice",     age: 25 };
```   

### 3. Functions

- **Explanation:** Functions are blocks of code designed to perform a particular task.
- **Code Example:**
```    
function greet(name) {     return "Hello " + name; }
```
### 4. Syntax

- **Explanation:** JavaScript syntax includes rules for writing valid code, like statement termination with semicolons, and using curly braces for blocks.
- **Code Example:**
```
if (condition) {     // code block }
```

### 5. Arrays

- **Explanation:** Arrays are used to store multiple values in a single variable.
- **Code Example:**
```
let fruits = ["Apple", "Banana", "Cherry"];
```

### 6. Types

- **Explanation:** JavaScript is a loosely typed language but supports various types like `string`, `number`, `boolean`, `object`, etc.
- **Code Example:**
    ```
    let number = 5; // Number 
    let text = "Hello World";  // String
    ```
### 7. OOP in JavaScript

- **Explanation:** Object-Oriented Programming in JavaScript can be achieved using prototypes, classes, and objects.
- **Code Example:**    
    ```
    class Car {     
    constructor(brand) {
             this.brand = brand;
                  }
				}
     let myCar = new Car("Ford");
    ```
### 8. Prototypes

- **Explanation:** Every JavaScript object has a prototype, a template object from which it inherits methods and properties.
- **Code Example:**
    ```
    function Person(name) {    
     this.name = name; 
     } 
     Person.prototype.greet = function() {
          return "Hello " + this.name; 
          };
    ```
    

### 9. TypeScript

- **Explanation:** A superset of JavaScript that adds static types.
- **Code Example:**
    ```
    let isDone: boolean = false;
    ```

### 10. Algorithm Exercise

- **Explanation:** This often involves solving a problem or performing a calculation using JavaScript.
- **Code Example:**
    
    ```
    function factorial(n) {
         return (n != 1) ? n * factorial(n - 1) : 1; 
         }
    ```
    

### 11. Access Modifiers

- **Explanation:** Access modifiers like `public`, `private` in TypeScript control the accessibility of class members.
- **Code Example:**
    
    ```
    class Person {
         private name: string;
              constructor(name: string) {
                       this.name = name;
                            }
                             }
    ```
    

### 12. Choosing Function, Class, or Something Else

- **Explanation:** Deciding whether to use a function, class, or other construct depends on the specific needs like reusability, encapsulation, etc.
- **Code Example:** Depends on specific use-case.

### 13. HTML and CSS

- **Explanation:** Basics of webpage structure (HTML) and styling (CSS).
- **Code Example:**
    
    
    `<div class="container">Hello World</div>`
    
    `.container {     color: blue; }`
    

### 14. Event Listeners

- **Explanation:** JavaScript event listeners allow you to execute functions in response to user actions.
- **Code Example:**
    
    javascriptCopy code
    
    ```
    document.getElementById("myBtn").addEventListener("click", displayDate);  function displayDate() {     document.getElementById("demo").innerHTML = Date(); }
    ```
    

### 15. Event Delegation and Propagation

- **Explanation:** Event delegation is a technique of handling events at a higher level in the DOM than the element on which the event originated. Event propagation is the way events propagate through the DOM.
- **Code Example:**
    
    javascriptCopy code
    
    ```
    document.getElementById("parent").addEventListener("click", function(e) {     
    if (e.target && e.target.nodeName == "LI") {         console.log("List item clicked!");    
     } 
     });
    ```

### 16. Async/Await and Promises

- **Explanation:** Async/Await and Promises are used for handling asynchronous operations in JavaScript. Promises represent a value that may be available now, in the future, or never. Async/await is syntactic sugar over Promises, making asynchronous code easier to write and read.
- **Code Example:**
    
    javascriptCopy code
    
    ```
    async function fetchData() {     
    try {         
    const response = await fetch('https://api.example.com/data');         const data = await response.json();
             console.log(data);     } 
             catch (error) {         
             console.error('Error fetching data:', error); 
                 } 
                 }
    ```
    

### 17. Error Handling

- **Explanation:** Error handling in JavaScript is done using `try...catch` blocks. This allows you to catch errors thrown in synchronous code and deal with them in a controlled way.
- **Code Example:**
    
    javascriptCopy code
    
   ```
   try {     // Code that may throw an error 
       let result = riskyOperation(); }
        catch (error) { 
            console.error('An error occurred:', error); }
   ```
    

 
### 18. ES6 Features

- **Arrow Functions:** Provide a more concise syntax for writing function expressions.
    
    javascriptCopy code
    
    `const add = (a, b) => a + b;`
    
- **Template Literals:** Allow for string interpolation and multiline strings.
    
    javascriptCopy code
    
    ``let greeting = `Hello, ${name}!`;``
    
- **Destructuring Assignment:** Makes it possible to unpack values from arrays or properties from objects.
    
    javascriptCopy code
    
    `const {firstName, lastName} = person;`
    
- **Default Parameters:** Provide default values for function parameters.
    
    javascriptCopy code
    
    ``function greet(name = "Guest") {     console.log(`Hello, ${name}!`); }``
    

### 19. Web APIs

- **Explanation:** Web APIs provide interfaces to a wide range of useful functionality built into the browser, like making HTTP requests, manipulating the document object model (DOM), storing data, etc.
- **Code Example (Using `fetch` API):**
    
    javascriptCopy code
    
    `fetch('https://api.example.com/data')     .then(response => response.json())     .then(data => console.log(data))     .catch(error => console.error('Error fetching data:', error));`
