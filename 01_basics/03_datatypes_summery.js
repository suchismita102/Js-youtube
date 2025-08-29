// how the date is stored in memory and how th data is accessed..based on these factors 
// there are two types of datatypes. primitive and non-primivite

//Primitive data-types

//call by value: when we copy this from somewhere to other,
//  then the reference of the original data is not given but a copy is given
//and all the changes ar done in the copy

// 7 types : String, Number, Boolean, null, undefined, 
// symbol(any value is made unique), BigInt

const score=100; //number
const scorevalue=100.3 //number
const isLoggedin=true; //boolean
const ousidetemp=null //null but typeof operator gives output object
let userEmail; //undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false
const bigNumber=233458456364856945264n
console.log(bigNumber)
// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it.
//  You can assign different types of values to a variable during its lifetime.
//For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
//On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time,
//  before the code is executed.
//Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:
//int x = 10; // x is a variable of type int
//String name = "John"; // name is a variable of type String
//JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
// Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

//Typescript const score:number=100


//Non-Primitive(Reference Type)

//the reference of these values can be directly allocated in the memory
//Array, Objects, Functions,

const heros=["shatiman","naagraj","doga"] //object (array)
let myObj = {
    name:"suchi", //  object
    age: 22,
}
console.log(typeof heros)
const myFunction=function(){ // function (object)
    Console.log("Hii")
}
