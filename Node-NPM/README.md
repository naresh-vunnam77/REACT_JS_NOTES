# Node.js Basics: Node.js Basics:

### Basic: Installing Node.js and Running Simple Scripts:

- Node.js allows running JavaScript on the server - side.

  - Installation:
  - Download and install Node.js from the official website: Node.js.

- Running a Simple Script:

Create a file(e.g., hello.js) with the following code:

 ``` console.log('Hello, Node.js!');```

   - Open a terminal and run:

 ```node hello.js```

### Conciseness and Readability:

- Node.js simplifies server - side JavaScript development by providing a runtime environment.
- Running scripts directly in Node.js enhances code portability and ease of use.

### Use Cases:

- Scripting: Automating tasks with JavaScript on the server.
- Testing: Running scripts for testing and debugging.

## Intermediate: Understanding the Event - Driven, Non - Blocking Architecture:

- Node.js is built on an event - driven, non - blocking I / O model.

  - Event - Driven Model:

- Utilizes events to handle asynchronous operations.
  - Example: Handling HTTP requests in an event - driven manner.
    Non - Blocking I / O:

- Allows handling multiple requests simultaneously without waiting for each to complete.
- Facilitates efficient utilization of system resources.
- Concurrency and Scalability:

   - Node.js excels in scenarios with a high number of concurrent connections due to its non - blocking nature.

###  Use Cases:

- Real - Time Applications: Chat applications, online gaming, and collaborative tools.
- Scalable APIs: Handling numerous concurrent API requests.

##  Advanced: Exploring the Node.js Global Object and Basic Modules:

- Node.js provides a global object and essential modules for common tasks.

##### Global Object(global):

  - Variables declared without var, let, or const are implicitly part of the global object.
    -Example:
    ``` global.myVariable = 'Hello'; ```makes myVariable accessible globally.

##### Basic Modules:

Node.js includes core modules for various functionalities(e.g., fs for file system operations, http for creating HTTP servers).
  Example:
```
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
###  Conciseness and Readability:

- Utilizing global objects and core modules enhances code reusability.
- Accessing modules simplifies common tasks like file operations and network requests.

### Use Cases:

- File System Operations: Reading / writing files using the fs module.
- HTTP Server Creation: Building a basic HTTP server with the http module.
Basic: Installing Node.js and Running Simple Scripts:


#
# npm Basics:

## Basic: Installing npm Packages using npm install:

npm (Node Package Manager) is the package manager for Node.js, allowing the installation of third-party packages.

Installing a Package:

``` npm install package-name ```

- Saving as Dependency:

 ```npm install package-name --save```

### Conciseness and Readability:

- npm simplifies package management, making it easy to install and use external libraries.
- Installing packages with npm install automatically adds dependencies to the node_modules directory.

### Use Cases:

- Library Integration: Adding external libraries to a project.
Tool Adoption: Installing command-line tools globally.
Intermediate: Managing Project Dependencies with package.json:

- The package.json file contains metadata about the project and its dependencies.

Initializing package.json:

``` npm init ```

Installing and Saving Dependencies:

``` npm install package-name --save ```
Dev Dependencies:

``` npm install package-name --save-dev ```

### Conciseness and Readability:

- package.json acts as a central configuration file, providing details about the project.
- Dependencies are explicitly listed, ensuring consistency across different environments.

### Use Cases:

- Project Configuration: Storing project metadata and settings.
- Dependency Tracking: Managing project dependencies efficiently.
Advanced: Using npm Scripts for Automation and Custom Commands:

npm allows defining custom scripts in package.json for automation.

Defining Scripts:
```
"scripts": {
  "start": "node server.js",
  "test": "mocha tests/*.js",
  "build": "webpack"
}
```
Running Scripts:

``` npm run script-name ```

### Conciseness and Readability:

npm scripts streamline common development tasks and provide a consistent interface.
Automation of build, test, and deployment processes enhances code quality and efficiency.


### Use Cases:

Build Processes: Running bundlers like Webpack or Babel.
Testing: Executing test suites with tools like Mocha or Jest.

#
# Modules in Node.js:

### Basic: Creating and Using Modules:

Node.js allows modularizing code by breaking it into separate files (modules).

Creating a Module:
```
// math.js (module)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

```

Using a Module:

```
// main.js (using module)
const math = require('./math.js');
console.log(math.add(5, 3));       // Outputs: 8
console.log(math.subtract(10, 4)); // Outputs: 6

```

### Conciseness and Readability:

Modules improve code organization by separating functionality.
Reusable code blocks enhance maintainability and readability.

### Use Cases:

Code Organization: Structuring code into manageable and reusable components.
Reusability: Sharing common functionality across different parts of an application.

## Intermediate: Understanding module.exports and require:

module.exports is used to expose functionality from a module, and require is used to import that functionality.

Exporting from a Module:
```
// utils.js (module)
const formatText = (text) => text.toUpperCase();
module.exports = formatText;
```
Importing into Another Module:
```
// main.js (using module)
const formatText = require('./utils.js');
console.log(formatText('hello'));  // Outputs: HELLO
```

### Conciseness and Readability:

Explicitly exporting and importing functions improves code clarity.
module.exports allows exporting any type of value, not just functions.

### Use Cases:

Selective Export: Exporting only necessary functionalities from a module.
Single Function Export: Exporting a single function or object.

## Advanced: Exploring the exports Object and Module Caching:

exports is a shorthand for module.exports, and Node.js caches modules after the first require.

Using exports Object:
```
// utils.js (module using exports)
exports.formatText = (text) => text.toUpperCase();

```
Module Caching:
```
// main.js (using module)
const formatText1 = require('./utils.js');
const formatText2 = require('./utils.js'); // The same instance is used

console.log(formatText1 === formatText2); // Outputs: true

```
###  Conciseness and Readability:

Using exports provides a shorthand for exporting multiple properties.
Module caching improves performance by reusing the already loaded module.

### Use Cases:

Multiple Exports: Exporting multiple properties using the exports object.
Resource Optimization: Avoiding unnecessary reloading of modules for improved performance.