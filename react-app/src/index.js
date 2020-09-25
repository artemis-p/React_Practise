// import React from "react";
// // ('react -> is the module and React is the object we are importing from this module')
// import ReactDOM from "react-dom";

const colors = ['red', 'green', 'blue'];
 // we want to have a list of all the colours in the array, so we need a callback function
// we need to pass a callback function by the map method. the job of this function is to transorm each element in the above array
// the map method returns a new array and it doesn't modify the original array
 const items = colors.map(function(color) {
     return '<li>' + color + '</li>';
 });

 // the above function written as an arrow function
 const items = colors.map(color => '<li>' + color + '</li>');

 // the above by using a template literal
 const items = colors.map(color => `<li>+ ${color} </li>`)