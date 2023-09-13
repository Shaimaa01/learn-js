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
console.log(-dd + ++ee * ++gg + ++ff);

// 9/9 /2023

/*
Number
*/

console.log(1000000);
console.log(1_000_000); //ignore 😭 Syntactic Sugar
console.log(1e6); //e The number of numbers that I wrote
console.log(10 ** 6); //الاس
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 20000000);

/*
  Number Methods
    Two Dots To Call A Methods
    toString()
    toFixed()
    parseint()
    parseFloat()
    isInteger() [ES6]
    isNaN() [Es6]
*/

console.log((100).toString());
console.log((100.5555555).toFixed(2)); //بتقرب لاقرب رقمين وكمان بتحول الرقم للاسترنج

console.log(parseInt("100 osama")); //بتحلل البيانات وبعدين ترجع منها الرقم (parseتحليل) (int ارقام)
console.log(Number("100 osama"));
console.log(+"100 osama");

console.log(parseInt("100.500 osama")); // بترجع رقم صحيح فقط
console.log(parseFloat("100.500 osama")); // بترجع رقم عشري كملن مع الرقم الصحيح

//؟هل العدد صحيح
console.log(Number.isInteger("100")); //دا اصلا مش عدد😂😂😂
console.log(Number.isInteger(100.5)); // عدد عشري
console.log(Number.isInteger(100)); //عدد صجسج😎

console.log(Number.isNaN(100 / "uuu")); //not a number اي حاجه مش مفهومه

/*
  Math Object
    round()
    ceil()
    floor()
    min()
    max()
    pow()
    random()
    trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.5)); // سقف الحاجه  هتتقرب لفوق خالص بغض النظر عن الرقم دي كبير ولا صغير
console.log(Math.floor(99.5)); //ارضيه هتتقرب لتحت خالص

console.log(Math.min(10, 20, 100, -100, 90)); //اقل رقم فيهم
console.log(Math.max(10, 20, 100, -100, 90)); // اعلي رقم فيهم

console.log(Math.pow(2, 4)); // الاس pow> power

console.log(Math.random()); // بتجيب اي رقم عشوىي

console.log(Math.trunc(99.9)); // لا يقرب الرقم العشري يتجاهله فقط ياخذ العدد الصحيح

// Number challenge

let a1 = 100;
let b1 = 2_00.5;
let c1 = 1e2;
let d1 = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a1, b1, c1, d1))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a1, Math.trunc(d1))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d1)); // 2
console.log(Math.floor(d1)); // 2
console.log(Math.round(d1)); // 2
console.log(parseInt(d1)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b1) / Math.ceil(d1)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(b1) / Math.ceil(d1)); // 67 => Number
console.log(Math.round((Math.trunc(b1) / Math.ceil(d1)).toFixed(2)));
/*
String Methods
  Access With Index
  Access With ChartAt()
  Length
  trim()
  toUpperCae()
  toLowerCase()
  Chain Methods
*/

let theName = "  Ahmed  ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]); //index start count from zero
console.log(theName[5]); //index start count from zero

console.log(theName.charAt(1)); //give me position to give you his charcter
console.log(theName.charAt(5)); //give me position to give you his charcter

console.log(theName.length); // count the characters number
console.log(theName.trim()); //  Delete the space at the beginning and end

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
String Methods
  indexOf(value [Mand] , Start [Opt] 0)
  lastIndexOf(Value [Mand] , Start [Opt] 0)
  slice(Start [Mand] , End [Opt] Not Include End)
  repeat(TImes) [ES6]
  split(Separator [Opt] , Limit [Opt])
*/

let a2 = "ElZero Web School";

console.log(a2.indexOf("Web"));
console.log(a2.indexOf("Web", 8));

console.log(a2.indexOf("o")); //بيبدأ العد من الشمال لليمين
console.log(a2.lastIndexOf("o")); // بيبدا العد من اليمين للشمال وولو القيمه مش موجوده اللي بتبحث عنها هيرجع -1

console.log(a2.slice(0, 4)); //بيقطع الاسترنج من . الي
console.log(a2.slice(-5, -3)); // لوعاوزه يبدا العد من الاخر

console.log(a2.repeat(5));

console.log(a2.split("")); // بيقصص العنصر
console.log(a2.split(" "));
console.log(a2.split("|"));
console.log(a2.split(" ", 2));

/*
String Methods
  substring(Start [Mand] , End [Opt] Not Including End)
    start > End Will Swap
    start > 0 It Start From 0
    Use Length To Get Last Character
  subsrt(Start [Mand] Character To Extract)
    start >= Length =""
    Negative Start From End
  includs(Value [Mand] , start [Opt] Default 0) [ES6]
  startsWith(Value [Mand] , start [Opt] Default 0) [ES6]
  endsWith(Value [Mand] , Length [Opt] Default Full Length) [ES6] 
*/
console.log(a2.length);
console.log(a2.substring(2, 6)); //معناها استرنج فرعي من الاسترنج الرىيس
console.log(a2.substring(6, 2));
console.log(a2.substring(-10, 6)); //اي رقم اصغر من الصفر هيخليه يبدا من الصفر
console.log(a2.substring(17 - 1)); // length precedes index by one because it starts from zero
console.log(a2.substring(a2.length - 5, a2.length - 3));

console.log(a2.substr(0, 6)); ////I will start from 0 and count 6 characters
console.log(a2.substr(17));
console.log(a2.substr(-3)); //يقدر يعد من الاخر
console.log(a2.substr(-5, 2));

console.log(a2.includes("Web")); //بتشوف الاسترنج اللي انت حاطه موجوج ولا مش موجود
console.log(a2.includes("Web", 8)); // value , start from .....

console.log(a2.startsWith("E")); // عاوز اساله هل الجله دي بتبدا بحرف ولا لاا E
console.log(a2.startsWith("Z", 2)); // value , start from .....

console.log(a2.endsWith("o", 6)); // count length not index , الكلمه بتنتهي بحرف o
console.log(a2.endsWith("ro", 6));
console.log(a2.endsWith("l"));

//String Chalange😎
let a3 = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a3.charAt(2).toUpperCase() + a3.slice(3, 6)); // Zero

// 8 H
console.log(a3.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a3.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a3.substr(0, 6) + a3.substr(10, 16)); // Elzero School
console.log(`${a3.substr(0, 6)} ${a3.substr(-6)}`);

// Solution Must Be Dynamic Because String May Changes
console.log(
  a3.substr(0, 1).toLowerCase() +
    a3.substring(1, a3.length - 1).toUpperCase() +
    a3.slice(-1).toLowerCase()
); // eLZERO WEB SCHOOl
