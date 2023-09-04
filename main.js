/*
Output to Screen
---window.alert()
---document.write()
---console.log()

--syntax
*/

// window.alert("Hello from js file");
// show up a message diractly after open the page |not used alot becosue make every thing below it stopped

document.write("<h1>bye</h1>");
// you can write anything text or element but not agood way

console.log("Hello From js file");
// print your message in console

/*
--Console Methoeds
---log
---error
---table

--Web API

--Styling Console
---Directive %c
*/

console.log("Log");
console.error("Error");
console.table(["osama", "Ahmed", "Sayed"]);
console.log(
  "Hello from %cjs %cfile",
  "color:red; font-size:40px",
  "color:blue; font-size:40px"
);

/*
--ES6 ECMAScript
ECMAScript 2015 or ES2015 is a significant update to the JavaScript programming language. 
It is the first major update to the language since ES5 which was standardized in 2009.
 Therefore, ES2015 is often called ES6.
*/

// 24/8/2023

/*
 Date Types Intro
 --string
 --Number
 --Array => object
 --object
 --Boolean
*/

console.log("osama");
console.log(typeof "osama");
console.log(typeof 5000);
console.log(typeof 500.55);
console.log(typeof ["k", "l0", "hh"]);
console.log(typeof { name: "osama", age: 17, country: "EG" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/*
variables Intro
--Declare A Variables
--Syntax( Keyword | variable Name |assignment opereror| variable value )
--declare varibles first and then you can use it
*/

(user = "osama-8"), (age = 55); // 2variables one declaration

console.log(user);
console.log(user);
console.log(hello);
console.log(age);

hello.innerHTML = "option"; //change content in html file

// Identifiers  = variables name

userName = "lololo"; //camel case
console.log(userName);

/*
var
---Redeclar(Yes)
---Access Before Declare (undefined)
---Variables Scoop Drama [Added to window]
---Block or finuction Scop

Let
---Redeclar( No => Error)
---Access Before Declare (Error)
---Variables Scoop Drama [Added to window]
---Block or finuction Scop

Const
---Redeclar( No => Error)
---Access Before Declare (Error)
---Variables Scoop Drama [Added to window]
---Block or finuction Scop

 */

/*
--string syntax + Character Escape Sequences
 \ Escape + Line continue
 \n
*/

console.log("Elzero");
console.log('Elzero Web "School"');
console.log('Elzero \\Web "School"');
console.log(
  "Elzero\
 web\
 School"
);
console.log('Elzero\nWeb\n"School"');

/*
--Concatenation
*/

let a = "I love";
let b = "javascript";
let c = " ";

document.write(a + " " + b);
document.write(a + c + b);
console.log(a, b);

/*
  Template Literals (Template Strings)
*/

let d = "We Love";
let e = "JavaScript";
let f = "And";
let g = "Programing";

console.log(d + ' "" ' + e + " \n" + f + " " + g);

console.log(`${d} "" \\ ${e} ${f} ${g}`);

let title = "Elzero";
let desc = "Elzero web school";

let markup = `
<div class=card>
<div class=child>
<h2>${title}</h2>
<p>${desc}</p>
</div> 
</div>
`;

document.write(markup);

//2\9\2023

/*
--Arithnetic Operators
  + Addition
  - subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ post / pre] post => print and then collect
  -- Decrement [ post /pre ] pre => 
*/

console.log(10 + 20);
console.log(10 + "osama");

console.log(10 - 20);
console.log(10 - "osama"); //Nan
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4); //الاس
console.log(2 * 2 * 2 * 2);

console.log(10 % 2); //باقي الاقسمه
console.log(11 % 2); //احذف الزياده عشان يكون العدد صحيح

num = 1;
num++;
console.log(num); //ex.post

num = 1;
++num;
console.log(num); // ex.pre

/*
  + Unary Plus [Return Number If Its Not Number]
  - Unary Negation [ Return Number If Its Not Number + Negates It]
  */

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"osama");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"osama");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100")); //unary is more easy

/*
  Type coercion (Type Casting)
*/

let h = "10";
let i = 20;
let j = true;

console.log(+h + i);
console.log(h - i);
console.log("" - 2);
console.log(true - false);
console.log(j + i);
console.log(h + i + j);
console.log(+h + i + j);

/*
  Assignment Operators
*/

let k = 10;

k = k + 20;

k = k + 70;

k += 100; //k = K + 100

k -= 50; // k = k - 50

k /= 50; // k = k / 50

console.log(k);

// challange 1* /

let aa = 10;
let bb = "20";
let cc = 80;

console.log(++aa + +bb++ + +cc++ - +aa++);
 /*
          [++aa] [+] [+bb++]  [+cc++] [- ]  [+aa++]
[++aa]
   value:11
   Eplain: pre icrement
[+]
  Eplain: add operator
[+bb++]
   value:20
   Eplain:postincrement , unary plus 
[+cc++]
value:80
   Eplain:postincerement , unary plus
[+aa++]
   value:11
   Eplain:postincerement , unary plus
[- ]  
    Eplain:minus
*/

console.log("update😒");
console.log("aa:", aa); // Output: 12
console.log("bb:", bb); // Output: 21
console.log("cc:", cc); // Output: 81

console.log(++aa + -bb + +cc++ - -aa++ + +aa);
/*
[++aa]
  value:13
  Explain:pretincrement
[+]
  Explain:addition
[-bb]
  value:-21
  Explain:Unary Negation
[+cc++]
  value:81
  Explain:postincerement , unary plus
[-]
  Explain: minus
[-aa++]
  value:-13
  Explain:postincerement , Unary Negation
  update aa = 14 🧐
[+aa]
  value:14
  Explain:unary plus
*/

console.log("update😒");
console.log("aa:", aa); // Output: 14
console.log("bb:", bb); // Output: 21
console.log("cc:", cc); // Output: 82

console.log(--cc + +bb + --aa * +bb++ - +bb * aa + --aa - +true);
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1); //😎
/*
[--c]
  value:81
  Explain:preDecrement
[+]
  Expain:addition
[+bb]
  value:21 
  Explain:Unary plus
[--aa]
  value:13
  Explain:preDecrement
  update aa = 13
[+bb++]
  value:21
  Explain:postincrement , Unary plus
  update bb =22
[+bb ]
  value:21
  Explain:unary plus
[--aa]
value:12
  Explain:postdecriment
  update aa =12
+true
  value:1
  Explain:unaryplus
*/

let dd = "-100";
let ee = "20";
let ff = 30;
let gg = true;

console.log(-dd * ee); // 2000
console.log(-dd +  ++ee * ++gg + ++ff)
