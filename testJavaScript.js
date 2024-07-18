// normal function
function sum(a,b) {
  return a+b;
}

// arrow operator
let giveSum = (a,b) => {
  return a+b;
}

// another format of arrow operator
let giveSum = (a,b) => a+b

// functional component
const sumFunctionalComponent = (a,b) => {
  return a+b;
}

// class component
import { Component } from "react";
class ClassComponent extends Component {
  render() {
    return <h1>"Hello World"</h1>;
  }
}

// destructuring
const listName = ['Harry', 'Bill', 'Leo'];
const [first, second, third] = listName; // will map values in order to the variables first, second, third

const obj = {
  name: 'Harry',
  age: 47,
  location: 'Dallas'
}
const {first, second, third} = obj // will map values in order

// difference between array and object destructuring is using [] for arrays and {} for objects









