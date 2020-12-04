function sayHello(){
  let tool = 'webpack';
  alert(`Hello I am ${tool}, welcome to ES6`);
}

// CommonJS syntax :
// module.exports = sayHello;

// ES6 syntax :
export { sayHello };
