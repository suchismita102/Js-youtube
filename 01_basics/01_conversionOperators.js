let score="33abc";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let num=null;
let Value=Number(num);
console.log(Value);
let num1=undefined;
console.log(num1);
let num2=true;
let Value2=Number(num2);
console.log(Value2);

// "33" -> 33
//"33abc" -> NaN
// true->1
let num3=0;
let Val3=Boolean(num3)
console.log(Val3); // false

let num4="Suchi";
let Val4=Boolean(num4)
console.log(Val4); // true

let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)






// -----------------Operations----------------

console.log(2**2)
str1="hello"
str2=" Suchi"
str3=str1+str2
console.log(str3)

console.log(1+2)//3
console.log(1+"2")//12
console.log("1"+2)//12
console.log("1"+"2")//12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

// details in ECMA Script

console.log(true)
console.log(+true)

//console.log(true+) error
console.log("") // Nothing
console.log(+"") //0

let n1 , n2, n3
n1=n2=n3=2+2

//prefix and postfix