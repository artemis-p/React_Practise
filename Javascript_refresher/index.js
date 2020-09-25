
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
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------
// ------- Variables --------