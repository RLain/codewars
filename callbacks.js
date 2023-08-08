// This file contains examples of how callbacks work:

// Mock API example ___________________________________________

const fetchDataFromAPI = (callback) => {
  // Simulating an asynchronous API request
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data); // Calling the callback with the retrieved data
  }, 2000);
};

const handleData = (data) => {
  console.log("Received data:", data);
};

// Pass the handleData function as a callback
fetchDataFromAPI(handleData);

// Multiply function example ________________________________

const multiply = (num1, num2, callback) => {
  const result = num1 * num2;
  callback(result);
};

const displayResult = (result) => {
  console.log("The result is:", result);
};

multiply(5, 3, displayResult);

/*
In more complex scenarios or asynchronous operations, callbacks become more valuable. 
Here are a few benefits of using callback functions:

1. Asynchronous Operations: Callbacks are commonly used in asynchronous programming to 
handle tasks that take time to complete, such as making API calls or reading files. 
By passing a callback function, you can specify what should happen once the asynchronous task 
finishes and returns the result. This allows the program to continue executing other tasks 
instead of waiting for the asynchronous operation to complete.

2. Customization and Reusability: Callbacks provide a way to customize the behavior of a 
function without modifying its implementation. By passing different callback functions, 
you can perform different actions with the result or handle events differently. 
This promotes code reusability and flexibility, as the same function can be used with 
various callback functions to achieve different outcomes.

3. Separation of Concerns: Using callbacks allows you to separate different concerns or 
responsibilities within your code. The main function focuses on performing its primary task, 
while the callback function handles additional actions based on the result or event. 
This separation improves code organization, readability, and maintainability.

4. Modularity and Composition: Callbacks enable modular design and composition of functions. 
You can create smaller, reusable functions and combine them by passing callbacks, 
building more complex behavior without tightly coupling the code. 
This promotes code maintainability, testability, and extensibility.

5. Event Handling: Callbacks are commonly used for event handling. 
Instead of continuously checking for events or polling, you can register a 
callback function to be triggered when a specific event occurs. 
This helps optimize resource usage and improves responsiveness.

It's important to note that while callbacks are a widely used technique, 
modern programming languages and frameworks have introduced alternative patterns 
like Promises, async/await, and reactive programming, which provide more expressive and 
manageable ways to handle asynchronous operations. 
Nonetheless, callbacks remain a fundamental concept and are still widely used, especially in 
older codebases or specific scenarios.

*/
