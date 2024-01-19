//arrow functions

function regular(a, b) {
  return a + b

}

console.log(regular(1, 2))

const arrow = (a, b) => {
  return a + b
}

const implicitArrow = (a, b) => a * b

// un comment to run below

// function Counter() {
//   this.count = 0;

//   // Regular function
//   this.incrementRegular = function () {
//     setInterval(function () {
//       // 'this' refers to the global object, not Counter
//       this.count++;
//       console.log('Regular:', this.count);
//     }, 1000);
//   };

//   // Arrow function
//   this.incrementArrow = function () {
//     setInterval(() => {
//       // 'this' refers to Counter, as it was captured from the surrounding context
//       this.count++;
//       console.log('Arrow:', this.count);
//     }, 1000);

//   };
// }

// const counter = new Counter();
// counter.incrementRegular(); // 'Regular' logs NaN because 'this' is not Counter
// counter.incrementArrow();   // 'Arrow' logs increments correctly within Counter


console.log(arrow(3, 4))
console.log(implicitArrow(4, 5))


const number = [1, , 2, 3]

const [x, y, z] = number

console.log(x,y,z)