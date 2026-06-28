//                                                      Console and basic

console.log("hello javaScript");
console.log("Name: Priankus\nAge: 22\nCity: Delhi ");
console.warn("this is not for the kids!!");
console.error("Wrong");
console.table([1, 2, 3, 4, 5]);

//                                                          Variable
var studentname = "Aman";
console.log(studentname);

var age = 22;
console.log(age);
//   swap the number using the third variable for help
var num1 = 5;
var num2 = 2;
var num3;
console.log("first number:",num1)
console.log("second number:",num2)
  num3=num1;
  num1=num2;
  num2=num3;
console.log("first number:",num1)
console.log("second number:",num2)

const pi=3.14
console.log(pi)

let score=0;
score +=10;
console.log(score)

//                                                          Datatype
let sentence="i am the best coder."
let number=10
let answer=true
let any;
let defined=null;

console.log(typeof(sentence))      //string
console.log(typeof(number))        //number
console.log(typeof(answer))        //boolean
console.log(typeof(any))           //undefined
console.log(defined)               //null

//                                                  Type Conversion & Coercion

let str = "50";
let number = Number(str);
console.log(number);

let num2 = 10;
console.log(number + num2);

let num4 = 100;
console.log(String(num4));
console.log(typeof String(num4));

let num1="5"-2;
console.log(typeof(num1))    // number
let num2="5"+2;
console.log(typeof(num2))    // string
let num3= "true"+1
console.log(typeof(num3))    //  string
let num4="500px"
console.log(parseInt(num4))   // 500 remove the alphabet

//                                                           String
let str1 = "hello javascript";
console.log(str1.length); //16
console.log(str1.toUpperCase()); // HELLO JAVASCRIPT
console.log(str1.toLowerCase()); //hello javascript
console.log(str1.includes("java")); //true
console.log(str1.replace("hello", "hey!!")); //hey!! javascript

let str2 = "html css js";
console.log(str2.split(" ")); //(3) ['html', 'css', 'js']
console.log("   priankus   ".trim()); //priankus
console.log("hi ".repeat(5)); //hi hi hi hi hi
console.log(str2.charAt(1));
var name = "aman";
var age = 10;

console.log(`My name is ${name} and I am ${age} years old`);
