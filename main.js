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
