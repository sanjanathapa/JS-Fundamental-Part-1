let js = "amazing";
      if (js ==="amazing") alert("This is Sanjana");

      20 + 10 +20;
      console.log(20+10+20);

      let a ;
      console.log(a);
      a= "Thapa";
      console.log("**********", a);

      const b = "Kavita";
      console.log(b);
      //b = "KAKI";
//const sanjanaAge = 2022-1999;
//const kAge = 2022-2002;
//console.log(sanjanaAge, kAge);

const now = 2022;
const sAge = now-1999;
const Kage = now-2001;

console.log(sAge+2, Kage*2);

let c = 10+15;  //15
c += 10; //c = c+10

const age = 12;
const isRightAge = age>=18;

if(isRightAge){
      console.log("she is eligible of driving licence")
}
else{
      const yearsLeft = 18-age;
      console.log(`You are too young for driving licence. wait for ${yearsLeft} years`)
}

const smass = 60;
const kmass = 55;
const sheight = 1.63;
const kheight = 1.72;

const sbmi = smass / (sheight*sheight);
const kbmi = kmass / (kheight*kheight);
const heightComp = kbmi>sbmi;

console.log(sbmi, kbmi, heightComp)
if(sbmi>26){
      console.log(`Sanjana's BMI ${sbmi} is higher than Kavita ${kbmi}`)
}
else{
      console.log("BMI is low")
}

const scoreDolphins = (97 + 112 +80 ) /3;
const scoreKoalas = (109 + 95 + 50 ) / 3;
console.log( scoreDolphins, scoreKoalas);

if (scoreDolphins>scoreKoalas && scoreDolphins>= 100){
      console.log("Dolphin has high score")
}
else if(scoreKoalas> scoreDolphins && scoreKoalas>= 100) {
      console.log("koalas has high score")
}
else if(scoreDolphins===scoreKoalas && scoreDolphins>=100 && scoreKoalas>= 100){
      console.log("Both win the trophy")
}
else (
      console.log("no one win the trophy")
)

//*********type conversion */ when we manually convert from one type to another. when we explicitly convert one type to another
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(Number('JONAS'));
console.log(typeof(NaN));
console.log(String(23), 43)


//Type coercin happens whenever an operator is dealing with 2 values that have different types so in that case js behins the scenes convert one of the values to match the other values
//****************Type Coercion-----when javascript automatically converts types behind the scenes for us. it happens implicitly completely hidden from us.
console.log('I am ' + 22 + ' years old')
//in the javascript the "+" operator that we used here triggers a coercion to a strings and so whenever there is an operation between a string and a number,the number will be converted to a string
console.log('20' - '2'- '4');
//string are converted to numbers (not all operators do type conversion). minus operator actually triggers the opposite conversion
console.log('20' + '2'+ '4');
console.log('23'/'2');

let n = '1'+1;
n= n-1;
console.log(n,"asss")

//% falsy values are:  0, " ", undefined, null, NaN
const money = 10;
if(money){
 console.log("Do not spend too much money")
}else{
 console.log("you should get a job")
}

//************ Switch statement ka alternative code from lecture*/
let day = "wednesday";
if(day === "Monday" ){
      console.log("Today is monday")
 }
 else if(day=== "tuesday"){
      console.log("Today is tuesday")
}

else if( day === "wednesday" || day === "thursday"){
      console.log(`today is ${day}`)
}
else if( day === "friday"){
      console.log("today is friday")
}
else{
      console.log("select a day")
}

//********Statements and Expressions
// so essentially , an expression is a piece of code that produces a value
//example 3+4 is an expression which will produce a value
//the same goes, for examplefor just any number like 1999 is an expression too.
//even though its just a simple value. but it's still also an expression.becz
//again this itself will produce a value in javascript.
// so true && false && !false all of these an expression becz this will in the end will produce some boollean value
//*******and on the other hand STATEMENTS is a big piece of code that is executed
//and which does not produce a value on itself */

//***Ternary Operator ******************/ coding challenge
// the bill was 275, the tip was 41.25, and the total value 316.25. test data  275, 40 and 430
//initial bill value, tip value and final value
//Hint:- To calculate 20% of a value, simply multiply it by 20/100=0.2
//Hint: Value x is between 50 and 300, if it >= 50 && <=300

const bill = 430;
const tip = bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `)

//Development and Production. Development phase is something when you are building the site or application
//on your computer.//During Development:- simply use the latest Google chrome or use the latest javascript features in thus face.
//Production: which is when your web application is finished. you deploy it on the internet and its 
//then running in your user's browsers.
//Transpiling: basically convertsmodern javascript versions back to ES5 using a process called transpiling.
//During Production:- Use babel to transpile and polyfill ypur code(converting back to ES5 to ensures browser
//compatibility for all users).


////Imp
//only primitive values are immutable. But an array is not a primitive value. we can still change the value being defined
// with const. see example in fundamental2 ln no. 183 to 192.
//we can actually mutate arrays even though they were declared with const.
