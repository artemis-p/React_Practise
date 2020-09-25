
// ------- Variables --------

// var -> variables declared with the var are scoped to the function
// let -> variables declared with the let keyword are scoped to the block they are defined
// const -> (constances)variables declared with the const keyword are scope inside of the block they are defined
// function sayHello() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     } 
// }

// sayHello();

// const x = 1;
// x = 2;


// ------- Objects --------
const person = {
    name: 'Mosh',
    walk: function() { // walk is a method in person object

    }
}

// react
// const person = {
//     name: 'Mosh',
//     walk() {},
//     talk() {}
// };

// //accessing these members
// //If you know ahead of time what property or method we're going to access we use the .notation
// person.talk();

// // if we don't know, let's say that targetMember is an input field on a form. depending on what the user types in that input field, we are going to access a different property in this person object. that's when we use the bracket notation. so instead of hardcoding name here we can pass targetMember => person[targetMember.value] = 'John';
// const targetMember = 'name';
// person['name'] = 'John';


// ------- This keyword --------

// const person = {
//     name: 'Mosh',
//     walk() {
//         console.log(this);
//     }
// };

// person.walk(); // in this case "this" is returning a reference in the person object

// const walk = person.walk;
// walk(); // in this case "this" is returning the window object

//If we call a function as a method to an object, then "this" is a reference to that object
// if we call a function as a standalone object or outside of an object, this will return the global object which is the "window" object in browsers


// Binding this

// Every function in JS is an object with properties and methods we can use. in react there is a method "bind" and we can use it to bind a function in an object (we can set the value of "this" permanently) => see function below. SO, when we call bind on the walk function, we get a new walk function and in that walk function, the value of "this" is based on the argument that we passed to the bind method

// const walk = person.walk.bind(person);
// walk();


// ------- Arrow Fuctions --------

// old JS
// const square = function(number) {
//     return number * number;
// }

// ES6
// const square = number => number * number; // we read this: number goes to number * number
// console.log(square(5));


// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];

// // const activeJobs = jobs.filter(function(job) { return job.isActive; }) // when we use filter method it iterates through the jobs array. fir each job object, it takes the job object and passes it to the predicate function. the job of the predicate is to determine if that job object should be returned from the filter method. so here we can return job.isActive and if that returns true then that job will be returned from the filter method

// const activeJobs = jobs.filter(job => job.isActive); // filter jobs where job is Active



// ------- Arrow functions and this --------


// const person = {
//     talk() {
//         setTimeout(function() {
//             console.log('this', this); 
//         }, 1000);
//     }
// }; // this will give us the window object. The callback function is not part of any other object, it's a standalone function, so by default this will print the window object


// const person = {
//     talk() {
//         var self = this; // we set the variable outside of the callback function and then can use self inside the callback function to get access to the person object
//         setTimeout(function() {
//             console.log('self', self); 
//         }, 1000);
//     }
// };

// person.talk();


// Arrow functions don't rebind the above, so if we change the callback function to an arrow function it will inherit the "this" keyword =>

// const person = {
//     talk() {
//         var self = this;
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
//     }
// };

// person.talk();


// ------- Array.map method --------

// const colors = ['red', 'green', 'blue'];
//  // we want to have a list of all the colours in the array, so we need a callback function
// // we need to pass a callback function by the map method. the job of this function is to transorm each element in the above array
// // the map method returns a new array and it doesn't modify the original array
//  const items = colors.map(function(color) {
//      return '<li>' + color + '</li>';
//  });

//  // the above function written as an arrow function
//  const items = colors.map(color => '<li>' + color + '</li>');

//  // the above by using a template literal
//  const items = colors.map(color => `<li>+ ${color} </li>`)


// ------- Οbject destructuring --------
// const address = {
//     street: '',
//     city: '',
//     country: ''
// };

// //we need to extract the values of these properties and store them in separate variables. We would do this:
// const street = address.street;
// const city = address.city;
// const country = address.country;

// // the above without writing repetitive code:
// const { street, city, country } = address; // { name of the target properties } and set it to the address object

// // in case you need to target only one property
// const { street } = address;

// // in case you wanted to call this constant by a different name, eg st. we use an alias
// const { street: st } = address;


// ------- Spread Operator --------
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// but if we wanted to use the spread operator we would write this:
// const combined = [...first, ...second];


// if we wante dto add values within the combined arrays
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined)

// how to clone an array using the spread operator
// const clone = [...first];
// console.log(clone);

// const first = { name: 'Mosh' };
// const second = { job: 'instructor' };
// const combined = {...first, ...second, country: 'Australia'};
// console.log(combined);

// const clone = {...first};
// console.log(clone);

// ------- Classes --------
// const person = {
//     name: "Mosh",
//     walk() {
//         console.log('walk');
//     }
// };

// const person2 = {
//     name: "Mosh",
//     walk() {
//         console.log('walk');
//     }
// };

// in the above case we have duplicated the implementation of the walk method. If there is a bug in a real life application then we have a problem. In this case, we need a blueprint to create objects of that type. We use classes

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log('walk');
//     }
// }

// const person = new Person('Mosh');
// person.walk();


// ------- Variables --------
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------