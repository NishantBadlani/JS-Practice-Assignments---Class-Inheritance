// import using require

// declare class

// export class using module.exports

// const React = require("react");
// const Shape = require("./shape");

// module.exports = class Cicle extends React.Component {
//   calculateArea() {}
// }

let Shape = require("./shape.js");
class Circle extends Shape {
  
  calculateArea() {}
}
module.exports = Circle;
