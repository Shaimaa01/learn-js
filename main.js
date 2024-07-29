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

(user3 = "osama-8"), (age = 55); // 2variables one declaration

console.log(user3);
console.log();
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
console.log(a2.split(" ")); // turn to array and cut the sentance from the space woow
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

//16/9/2023

/*
comparison Operators مقارنه
  == Equal
  !=Not Equal

  === Identical
  !== Not Identical

  > Larger Than
  >= Larger Than Or Equal

  < Smaller Than
  <= Smaller than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-10 == "-10");
console.log(10 != "10");

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log("osama" === "Ahmed");
console.log(typeof "osama" === typeof "Ahmed");

/*
Logical Operators
  ! Not
  &&& And
  || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 8 || 10 > 50);

/*
Control flow
  if
  elsa if
  elsa
  if (condition){
    // Block of code
  }
*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KAk";
let student = true;

if (discount === false) {
  price -= discountAmount; //Price = Price - discountAmount
} else if (country === "Egypt") {
  if (student === true) {
    //  Nexted If
    price -= discountAmount + 30;
  } else {
    //   Nexted If
    price -= discountAmount + 10;
  }
} else if (country === "japan") {
  price += 50;
} else {
  price -= 10;
}
console.log(price);

/*
  Condition (Teranry) Operator
*/

let theName1 = "shaimaa";
let theGender = "female";
let theAge = "100";

if (theGender === "male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// condition ? If True : If False

theGender === "male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "male" ? "Mr" : "Mrs";

document.write(result + "\n");

console.log(theGender === "male" ? "Mr" : "Mrs");

document.write("<br/>");

document.write(`Hello ${theGender === "male" ? "Mr" : "Mrs"} ${theName1}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger than 60")
  : console.log("Unknown🙄");

/*
Logical Or ||
    Null + Undefiend + Any falsy Value
  Nullish Coalescing Operator ??
    Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// let price1 = null;
// let price1 = 0;
// let price1 = false;
//let price1; Undefiend
let price1 = 0;

console.log(`The Price Is ${price1 || 200}`);
console.log(`The Price Is ${price1 ?? 200}`); // repect false Value like 0

//Condition Met====================================================================================================================
let st = "Elzero Web School";

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}

/*
  Switch Statement
  Switch (expression){
    Case 1 :
      // Code Block
      break;
    Case 2 :
      // Code Block
    Default:
      // Code Block
  }
    Default Ordering
    Multiple Match
    ===
*/

let day = 10;

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

//challange Switch Statement If Condition

//task 1==================================
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log((salary = 6000));
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log((salary = 7000));
    break;
  default:
    salary = 4000;
    console.log((salary = 4000));
    break;
}

//task 2=================================

let holidays = 4;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

/*
  Arrays
    creat Arrays [Two Methods]  new Array() + []
    Access Arrays Elements
    Nested Arrays
    Change Arrays Elements
    check For Array Array.isArray(arr);
*/
let myFriends = ["Ahmed", "osama", "saied", ["maro", "tailor"]];
console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`Hello ${myFriends[1][2]}`);
console.log(`Welcom ${myFriends[3][0][0]}`);

console.log(myFriends);
myFriends[1] = "shaimaa"; //change array
console.log(myFriends);
myFriends[3] = "molly";
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));

/*
  Arrays Methodes
    Length
*/

//Index Start From 0 [ 0 , 1 , 2 , 3]

let myFriends1 = ["anderia", "andy", "lime", "ptol"];

console.log(myFriends1.length); //4

myFriends1[myFriends.length - 1] = "malik";

myFriends1.length = 2;

console.log(myFriends1);

/*
  Arrays Methods [Adding And Removing]
    unshift("" , "") Add Element To The First
    Push("" , "") Add Element To The End
    shift() Remove First Element From Array
    pop() Remove Lest Element From Array 
*/

let myFriends2 = ["Ahmed", "mohemed", "sayed", "Alaa"];

console.log(myFriends2);

myFriends2.unshift("osama", "BEll");

console.log(myFriends2);

myFriends2.push("Asma", "salma");

console.log(myFriends2);

let first = myFriends2.shift();

console.log(myFriends2);

console.log(first);

let last = myFriends2.pop();

console.log(myFriends2);

console.log(last);

/*
  Arrays Methods [Search]
    indexOf(Search Element , From Index [Opt])
    lastIndexOf(Search Element , From Index [Opt])
    includes(ValueToFind , FromIndex [Opt]) [ES7]
*/

let myFriends3 = ["Ahmed", "Mohssen", "sayed", "Alaa", "Ahmed"];

console.log(myFriends3);

console.log(myFriends3.indexOf("Ahmed"));
console.log(myFriends3.indexOf("Ahmed", 2)); //عاوز ابحث عن ايه وابدا منين

console.log(myFriends3.lastIndexOf("Ahmed"));
console.log(myFriends3.lastIndexOf("Ahmed", -2));

console.log(myFriends3.includes("Ahmed"));
console.log(myFriends3.includes("Ahmed", 2)); //احمد موجود ولا لااه ابحثي لي من بؤاية الاتنين

if (myFriends3.indexOf("shia") === -1) {
  // لو الاندكس ملقاش القيمه المطلوبه بيطاعلك-1
  console.log("Not found");
}

if (myFriends3.lastIndexOf("shia") === -1) {
  // لو الاندكس ملقاش القيمه المطلوبه بيطاعلك-1
  console.log("Not found");
}

console.log(myFriends.indexOf("gg"));
console.log(myFriends.lastIndexOf("gg"));

/*
 Arrays Methods [Sort]
  sort(Function [Opt])
  reverse
*/

let myFriends4 = [
  10,
  "sayed",
  "Mohammeed",
  "90",
  1000,
  100,
  20,
  "10",
  -20,
  -10,
];

console.log(myFriends4);
console.log(myFriends4.sort()); // بيبدا بالارقام السالبه الاول وبعد كده الموجبه علي حسب الابجدية مش علي حسب قيمة الارقم يعني مثلا 1000 هتيجي قبل 20 علشان ابجديا الواحد بيجي قبل الاتنبن معلومات في غاية البداهه😂😂😂😂😂
console.log(myFriends4.reverse()); // ماشية بالعكس يعني بتعكس ترتيب المصفوفه
console.log(myFriends4.sort().reverse());

/*
  Arrays Methodes [Slicing]
    slice(start [Opt] , End [Opt] Not Including End)
    slice() => All Array
    If Start Is Undefined => 0
    Negative count From End
    If End Is Undefined || > Indexes =>Slice To The End Array.length
    Return New Array
    splice(Start [Mand] , DeleteCount [Opt] [0 No Remove], the Items to Add [opt])
    If Negative => Start From The End
*/

let myFriends5 = ["Ahmed", "sayed", "Ali", "osama", "Gamal", "Ameer"];
console.log(myFriends5);
console.log(myFriends5.slice());
console.log(myFriends5.slice(1));
console.log(myFriends5.slice(1, 3)); // not including End
console.log(myFriends5.slice(-3));
console.log(myFriends5.slice(1, -2));
console.log(myFriends5.slice(-4, -2));
console.log(myFriends5); //ذي ماهي ماتغيرتش الاتعديلات الي فوق بتطلع مصفوفه جديده مش بتغير قيمة الاصلية

myFriends5.splice(1, 1, "shia", "smara"); //  ابدا منين . كام عنصر هحذفه.الاضافات اللي انا عاوزه اضفها

console.log(myFriends5);

/*
  Arrays Methodes [Joining]
    concat(array, array) => Return A New Array
    Join(Separator)
*/

let myFriends6 = ["Ahmed", "sayed", "Ali", "Osama", "Gmail", "Amerr"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytem", "Shady"];

let allFriends = myFriends6.concat(myNewFriends, schoolFriends, "IAM", [
  "sh",
  "lol",
]); //😂لم العيله كلها في شوال

console.log(allFriends);
console.log(allFriends.join()); //بتلممهم كلهم في استرنج لو سبتها فاضيه من غير ما احطت علامه هتحط فصله بين عناصر الااري بشكل تلقاؤي
console.log(allFriends.join("")); // مش هيكون فيه فاصله هليزقو في بعض
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" | "));

//chalange 47

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(
  my[zero][--zero].concat(
    my[++zero][zero],
    my[++zero][zero],
    my[zero][counter],
    my[zero][++counter],
    my[zero][++counter]
  )
); // "Elzero"
//             1       0                 1      1           2      2       2       3           2        4        2        5
// anthoer way
console.log(`${my[1].slice(0, 2)}${my[2].slice(2)}`);
console.log(my[zero][--counter].concat(my[zero][++counter].toUpperCase())); // "rO"

/*
Loop 
  For
  for ( [1] [2] [3] ) {
    //Block Of Code 
  }
  */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
  Loop 
    Loop On Sequences
 */

let myFriends8 = ["Osama", "osaka", "otaka", "oynoze", "Ali"];

// console.log(myFriends8[0]);
// console.log(myFriends8[1]);
// console.log(myFriends8[2]);
// console.log(myFriends8[3]);
// console.log(myFriends8[4]);

for (i = 0; i < myFriends8.length; i++) {
  console.log(myFriends8[i]);
}

let myFriends9 = [
  1,
  2,
  "osama",
  3,
  4,
  "uota",
  7,
  8,
  "Osama",
  "osaka",
  "otaka",
  "oynoze",
  "Ali",
];

let onlyNames = [];

for (i = 0; i < myFriends9.length; i++) {
  if (typeof myFriends9[i] === "string") {
    onlyNames.push(myFriends9[i]);
  }
}
console.log(onlyNames);

/*
Loop
  Nested Loops
*/

let products = ["Keyboard", 20, 10, "Mouse", "pen", 40, "Monitor", "bad"];

let colors = ["REd", "Green", "Black"];

let models = [2020, 2021];

for (i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));

  console.log("Colors:");
  for (j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }

  console.log("Models:");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
console.log("++++++++++++++++++++++++++++++++++++");
/*
Loop Control
  Break 
  Countinue
  Label
*/

for (i = 0; i < products.length; i++) {
  if (products[i] === "pen") {
    break;
  }
  console.log(products[i]);
}

console.log("++++++++++++++++++++++++++++++++++++");

for (i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}

console.log("+++++++++++++++++++++++++++++++++++++++");

mainLoop: for (i = 0; i < products.length; i++) {
  console.log(`# ${products[i]}`);
  nestedLoop: console.log("Colors:");
  for (j = 0; j < colors.length; j++) {
    if (colors[j] === "Green") break mainLoop;
    console.log(`- ${colors[j]}`);
  }
}
console.log("+++++++++++++++++++++++++++++++++++++++");

/*
Loop For Advaced Example
*/
i = 0;
for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) {
    break;
  }
}

/*
  Products Practice
*/

let products2 = ["Keyboard", "Mouse ", "pen", "pad", "Monitor", "iphone"];
let colors2 = ["Red", "Green", "Blue"];
let showCount = 2;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> [${i + 1}] ${products2[i]}</h3>`);
  for (j = 0; j < colors2.length; j++) {
    document.write(`<p>${colors2[j]} </p>`);
  }
  document.write(`<p/>${colors2.join(" | ")}</p>`);
  document.write(`</div>`);
}

/*
  Loop
   while
*/
console.log("+++++++++++++++++++++++++++++++++++++++");

let products1 = ["keyboard", "Mouse", "Pen", "ped", "Monitor", "iphone"];

let index1 = 0;

while (index1 < products1.length) {
  console.log(products1[index1]);

  index1 += 1;
}
console.log("+++++++++++++++++++++++++++++++++++++++");
/*
 Loop
  Do / while
 */

i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

/*
 Loop challenge 56
 */

let myAdmins = ["Ahmed 😎", "Osama😑", "Sayed🤨", "stop", "samera"];
let myEployes = [
  "Amagad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

document.write(`<div>We Have x Admins</div>`);

document.write(
  `<div> We Have${
    myAdmins.slice(0, myAdmins.indexOf("stop")).length
  } Admins</div>`
);

document.write(`<hr/>`);
let countA = 1;
let countS = 1;
let countO = 1;
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "stop") {
    break;
  }
  document.write(`<div>`);
  document.write(`"The Admin For Team ${[i + 1]} Is ${myAdmins[i]}"`);
  document.write(`<h3>Team Members:</h3>`);
  for (j = 0; j < myEployes.length; j++) {
    if (myEployes[j].indexOf("A") === myAdmins[i].indexOf("A")) {
      if (myEployes[j].includes("A")) {
        document.write(`<p>- ${[countA]} ${myEployes[j]}</p>`);
        countA++;
      }
    }
    if (myEployes[j].indexOf("S") === myAdmins[i].indexOf("S")) {
      if (myEployes[j].includes("S")) {
        document.write(`<p>- ${[countS]} ${myEployes[j]}</p>`);
        countS++;
      }
    }
    if (myEployes[j].startsWith("O") && myAdmins[i].startsWith("O")) {
      document.write(`<p>- ${[countO]} ${myEployes[j]}</p>`);
      countO++;
    }
  }
  document.write(`</div>`);
  document.write(`<hr/>`);
}
/* lessons 57 - 63
  20/ 11 / 20323
*/
/*
  Function
    What Is Function ?
    User Defined vs Built In
    Syntax + Basic Usage
    Example From Real Life 
    Parameter + Argument
    Practical Ecample
*/

console.log(typeof console.log);

function sayHello(userName, age) {
  if (age > 40) {
    console.log("This App Is Not For Sutiable For You ");
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("osama", "40");
sayHello("solo", "50");
sayHello("empada", "23");

/*
  Function Advanced Examples
*/

function generateYears(start, end, exclude) {
  for (i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2000, 2023, 2022);

/*
  Function
    Return
    Automatic Semicolon Insertion [No Line Terminator Allowed]
    Interrupting
*/

function sayHello(userName, num1, num2) {
  return `Hi ${userName} ${num1 + num2} `; //مفيش بعد الريتيرن اي حاجه تنفع تتحط unreatchable code 😢
}
console.log(sayHello("lofeeee😀", 20, 30));

let result1 = sayHello("lofeeee😀", 20, 30);
console.log(result1);

function generate(start, end) {
  for (i = start; i <= end; i++) {
    console.log(i);
    if (i === 5) {
      return `Interruptting`; // بيوقف تنفيذ الكود
    }
  }
}

generate(1, 10);

/*
  Function
    Default Function Parameters
    Function Parameters Default [ Undefind]
    Old Strategies [Condition + Logical Or]
    ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  // if ( age === undefined){
  //   age = "Unkown" ;
  // }
  // age = age || "Unkown"
  return `Hi! ${username} Your Age Is ${age} `;
}

console.log(sayHello());

/*
  Function
    Rest parameters
    Only One Allowed
    Must Be Last Element
*/

function calc(...numbers) {
  //Rest Parameters
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    result += numbers[i]; // result = result +numbers[i]
  }
  return ` how you did that return are you working in different direction that is woried ${result}`;
}
console.log(calc(10, 20, 80, 50));

/* 
  Function Advanced Practice
    Parameters
    Default
    Rest
    Loop
    Condition
*/

function showInfo(
  user = "Unknown👻",
  age = "Unknown",
  rate = 0,
  showSkills = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome ${user} 🍣</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: $${rate}</p>`);
  if (showSkills === "Yes") {
    if (skills.length > 0) {
      document.write(`<p> Skills: ${skills.join(" | ")} </p>`);
    } else {
      document.write(`<p>Skills: No Skills </p>`);
    }
  } else {
    if (skills.length > 0) {
      document.write("Hidden Skills 😒");
    } else {
      document.write(`<p>Skills: No Skills </p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Sushi", 22, 5, "Yes", "HTML", "Css", "Js");

//Challenge 63 parmameters

/*
  Function  - Random Argument Challenge
  Creat Function ShowDetails
  Function Accept 3 Parameters [ a, b , c]
  Data Types For Info Is
    String = > Name
    Number = > Age
    Boolean = > Status
  Argument Is Random
  Data Is Not Sarted Output Depend On Data Types
    Use Ternary Conditional Operator
*/

// showDetails("Osama", 27, true); //Hello Osama Your Age Is 38 , Are You Available For Hire
// showDetails(38, "Osama", true); //Hello Osama Your Age Is 38 , Are You Available For Hire
// showDetails(true, 38, "Osama"); //Hello Osama Your Age Is 38 , Are You Available For Hire
// showDetails(false, "Osama", 38); //Hello Osama Your Age Is 38 , Are not You Available For Hire.
document.write(`<hr/>`);
function showDetails(name, age, free) {
  var tina = [name, age, free];
  for (i = 0; i < tina.length; i++) {
    typeof tina[i] === "string" ? (name = tina[i]) : null;
    typeof tina[i] === "number" ? (age = tina[i]) : null;
    if (typeof tina[i] === "boolean") {
      free = tina[i];
      free == true
        ? (free = `Are You Abailable For Hire🥳`)
        : (free = `You Are not  Abailable For Hire😢`);
    }
  }
  document.write(`<div> Hello ${name} Your Age Is ${age} , ${free} .</div>`);
}
showDetails("Osama", 27, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
document.write(`<hr/>`);

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed

// 14/ 12 /2023
// week 9
/*
  Funcytion
    Anonymous Function
    Calling Named Function vs Anonymous Function
    Argument To Other Function
    Task Without Name
    SetTimeout
*/

let caluclator = function (num1, num2) {
  return num1 + num2;
};

console.log(caluclator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

// document.getElementById("show").onclick = function () {
//   console.log("show");
// };

// setTimeout(function () {
//   console.log("Woow");
// }, 2000);

/*
  Function
    Function Inside Function
    Return Function
*/

//Example 1

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   //Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }
// console.log(sayMessage("Ahemd", "kim"));

//Example 2

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   //Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();

// }
// console.log(sayMessage("osama", "mohammed😎"));

//Example 3

function sayMessage(fName, lName) {
  let message = "Hello";
  //Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName} `;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}
console.log(sayMessage("osama", "mohammed😎"));

/*
  Function
    Arrow Function
      REgular Vs Arrow [param + No Param]
      Multiple Lines
      => Arrow operator
*/

//  let print =function() {
//   return 10;
// }

// let print = (_) => 10;
// There is no parameter
// only used when there is only one statment one line
// _ insted of ()  one character better than two character

// let print = num => num;
//if you have only one parameter you can delete ()
// if you have more than one you have to use ()

//  let print =function(num) {
//   return num;
// }

//  let print =function(num1 , num2) {
//   return num1 + num2;
// }

let print = (num1, num2) => num1 + num2;

//if you have more than one line you can not delet "return or {}"

console.log(print(100, 100));

//67
/*
  Scope التحكم في التواجد بتاع المتغيرات
    global And Local Scope
*/

var aScope = 1;
let bScope = 2;

function showText() {
  var aScope = 1;
  let bScope = 2;
  console.log(`Function - From Local ${aScope}`);
  console.log(`Function - From Local ${bScope}`);
}

showText();

console.log(`From Gloval ${aScope}`);
console.log(`From Gloval ${bScope}`);

// golbal accesable from everywhere

/*
  Scope 
    Block Scope [If , Switch , For ]
*/

var x = 10;

if (100 === 100) {
  var x = 50;
  console.log(`from If Block  ${x}`);
}

console.log(`From Global ${x}`);

/*
  Scope
    Lexical Scope

  search 
    Exaution Context
    Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);

    function grand() {
      let b = 100;
      console.log(`From grand ${a}`);
      console.log(`From grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

// Function Arrow Challenges

// [1] one Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...name) {
  return `String ${name
    .map(function (element) {
      return `[${element}]`;
    })
    .join(" , ")} => Done ! `;
};

// anthor solution

// let names = function (...name){
//   return ` String  [ ${name.join(" ],[")}] = > Done !`
// }

let names2 = (...name) =>
  `String ${name.map((element) => `[${element}]`).join(" , ")} => Done !`;

console.log(names("Osama", "Mohamed", "Ail", "Ibrahim"));
console.log(names2("Osama", "Mohamed", "Ail", "Ibrahim"));
// String [Osama] , [Mohamed] , [Ail] , [Ibrahim] => Done !

/*=========================================================*/

// [1] Replace ??? In Return Statement To Get The Output
// [2] Creat The Same Function With Regular Syntax
// [3] Use Array inside The Arguments To Get The output

// 80
let myNumbers = [20, 50, 10, 60];
let calc1 = function (one, two, ...nums) {
  return +[nums] + one + two; // [] to destroy function
};

let calc2 = (one, two, ...nums) => one + two + +[nums];
console.log(calc1(10, myNumbers[2], myNumbers[3]));
console.log(calc2(10, myNumbers[2], myNumbers[3]));

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(x));

// 11/2/2024
// week 10

/*
  Higher Order Functios
    > is a  function that accepts functions a parameters and /or returns a function

    Map
      method creats a new array
      populated with the results of calling a provided function on every element
      in the calling array

    Syntax map(callBack Function(Element , Index , Array) { }, thisArg)
      Elememt => The current elemnt being processed in the array 
      index => The index of the current element beging processed in the array
      Array => The Current Array

    Notes 
    Map Return A New Array

    Examples
      Anonymous Function
      Named Function
*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

let addSelf1 = myNums.map(function (element, index, arr) {
  // console.log(`current Element => ${element}`); //write element is nessary
  // console.log(`current Index => ${index}`); //write index is optional
  //   console.log(`Arry => ${arr}`); // write arr is optional
  // console.log(`this => ${this}`);
  return element + element;
}, 10);

let addSelf2 = myNums.map((element) => element + element);

console.log(addSelf1);
console.log(addSelf2);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

// so you can use annoymos function or name of function with map 🙂

/*
  Map
    Sawp Cases
    Inverted Numbers
    Ignore Blooean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elzero123er40";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    //condition ? True : False
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);

/*
  Filter
    method creates a new array 
    with all elements that pass the test implemented by the provided function.

  
  Syntas filter(callBackFunction(Element , Index , Array) {} , thisArg )
    Element => The Current elemnt being processed in the array
    index => The index of the current element being processed in the array
    Array => The Current Array
*/

// Get Friends With Name Stars With A
let friends = ["Ahmed", "sameh", "Sayed ", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 == 0;
});

console.log(evenNumbers);

// Test Map vs filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
    Filter Longest Word By Number
*/

// filter Words More Than 4 Charcters
let sentence = " I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers1 = "Elz123er4o";

let ign1 = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign1);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

newMix = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join(" ");

console.log(newMix);

/*
  Reduce
    method exeutes a reducer function on eaxh element of the array,
    resulting in a single output value

  syntax
  reduce(callBackFunc(Accumulator, current Val, Current Index < Source Array) {} , InitialValue)
    Accumlator => the accumulated Value Previously returned in the last invocation
    current Val => The Current element being processed in the array
    Index => The index of the current element being processed in the array
            starts from index 0 if an  initialvalue is provided.
            otherwise, it starts from index 1 
    Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add2 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`################`);
  return acc + current;
}, 5);

console.log(add2);

/*
  Reduce
    Longest word
    Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "propanganda",
  "other",
  "AAA",
  "Battery",
  "Test",
  "propagnada-twooo",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`################`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    // return ele != "@";
    return !ele.startsWith("@");
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(finalString);

/*
  forEach
    method executes a provided function once for each array element.

  Syntax forEach (callBackFunction(Element, Index , Array) {} , thisArg)
    Element => The Current element being processd in the array.
    Index => The index of the current element being processed in the array.
    Array => The Current Array

  Note 
    doesnt return Anything [Undefined]
    Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(" .content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
    ,
    _
    Space
    True => One Time Only In the Code

  You CanNot Use
    Numbers
    Letters

    You Must Use [Filter + Map + Reduce + Your Knowledge]
    Order Is Not Important
    All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let solution = "???????";

solution = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) ? (ele != "," ? ele : "") : "";
  })
  .map(function (ele) {
    return ele === "_" ? (ele = " ") : ele;
  })
  .reduce(function (acc, current) {
    return acc === current ? acc : acc + current;
  })
  .slice(0, -true);

console.log(solution); // Elzero Web School

/* 
  Object
    Into and What IS object
    Testing windo object 
    Accessing object
*/

let user = {
  //properties
  theName: "Osama",
  theAge: 38,
  //Methods
  sayHello: function () {
    return "Helloooooooo🥳 object";
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

//80
/*
  object
    dig Deeper
    dotNotation vs Bracket Notation
    Dynamic property Name
    اي بيانات في الدنيا تنفع تتحول للاسترنج تقدر تستخدمها ك اسم للبربورتي
*/

let myVar = "country"; // Dynamic Property Name

let user2 = {
  theName: "Osama",
  "country of": "Egypt",
  country: "Japan",
};

console.log(user2.theName);
console.log(user2["country of"]);
console.log(user2.myVar); // with dotNotation you can not use dynamic property insted you have to use Bracket Notation
console.log(user2[myVar]);
console.log(user2.country);

/*
    Rules for Identifiers in JavaScript:
Start with: A letter (A-Z, a-z), an underscore (_), or a dollar sign ($).
After the first character: Any combination of letters, digits, underscores, or dollar signs.
Case-sensitive: For example, myVar and myvar are different identifiers.
Keywords: Identifiers cannot be the same as reserved words in JavaScript, like if, else, var, let, const, function, etc.

    Examples of Valid Identifiers:
userName
_id
$element
data2
user_age

    Examples of Invalid Identifiers:
2name (cannot start with a digit)
var (reserved keyword)
-username (hyphens are not allowed)
*/

//81
/*
  object
    Nested object And Trainings
*/

let user4 = {
  name: "Shaimaaaaaaaaaaaa", // propeties
  age: 100,
  skills: ["HTML", "Css", "Js"],
  available: false,
  addresses: {
    //Nested object from user4
    japan: "tokyo",
    egypt: {
      //Nested object form addresses
      one: "sina",
      two: "aswan",
    },
  },
  checkAv: function () {
    if (user4.avaliable === true) {
      return "free for work";
    } else {
      return "not free";
    }
  },
};

console.log(user4.name);
console.log(user4.age);
console.log(user4.skills);
console.log(user4.skills.join(" | "));
console.log(user4.skills[2]);
console.log(user4.addresses);
console.log(user4.addresses.japan);
console.log(user4.addresses.egypt);
console.log(user4["addresses"]["egypt"]["one"]);
console.log(user4.addresses.egypt["two"]);

console.log(user4.checkAv());

//82
/*
  object
    Creat With New Keyword new Object(); 
*/

let user5 = new Object({
  age: 20,
}); //O id capital

console.log(user5);

user5.age = 38; // the way who to add prperty to your object
user5["country"] = "Egypt";

console.log(user5);

user5.sayHello = function () {
  return "Hello👻";
};

console.log(user5);
console.log(user5.age);
console.log(user5.country);
console.log(user5.sayHello());

/*
  Function this Keyword
    this Introduction
    this Inside Object Method
      When a function is called as a method of an object,
      its this is set to the object the method is called on .
    Global object 
    Test Variables With Window And This
    Globla Context
    Function Context
    
  Search 
    Strict Mode 
*/

console.log(this); //window
console.log(this === window); //true

myVar2 = 100;

console.log(window.myVar2);
console.log(this.myVar2);

function sayHello() {
  console.log(this);
  return this;
}

sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user6 = {
  age: 24,
  ageInDays: function () {
    return this.age * 365;
  },
};

console.log(user6.age);
console.log(user6.ageInDays());

//84
/*
  object
    Creat object with create Method
*/

let user7 = {
  age: 40,
  doubleAge: function () {
    return this.age * 2; //  زيس تعود علي اوبجيكت اللي بيكول الميثود
  },
};
console.log(user7);
console.log(user7.age);
console.log(user7.doubleAge());

let obj = Object.create({}); // creae method :accpet object to use as a prototype وعايزه اوبجكت يستخدم كنموذج لانشاء الاوبجكت الجديد ده وممكن يكون فاضي
obj.age = 100; // add a new property
console.log(obj);

let copyObj = Object.create(user7);
copyObj.age = 30;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
85
  object 
    create object with assign method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2); // target:- عاوزين اوبجيكت هننسخ ليه حاجات  + source :مجموعة فاليو هياخدها من اوبجيكت واحد او اكتر هيضيفها للتاريجيت
finalObject.prop1 = 100; // update value
finalObject.prop4 = 4;
console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 }); // object فاضئ  ,  source من اوبجكت موجود قبل كده , properties ضفت كاي اوبجيكت عاديon the fly

console.log(newObject);

//This recipe, or method (Symbol.iterator), is like an instruction booklet for how to access each item. Once defined, it allows the JavaScript engine to interact with the data structure in a predictable and consistent way, ensuring that each item can be accessed in sequence. This is very useful for all kinds of operations that involve processing items one at a time, from displaying data on the screen to performing calculations on data elements.

//week 12 🥳

/*
  DOM
    What Is DOM
    DOM Selectors
      Find Element By ID
      Find Element By Tag Name
      Find Elemnet By Class Name
      Find Element By Css Selectors
      Find Element By Collection
        title 
        body
        images
        forms 
        links
*/

// Dom => means document object model

let myIdElement = document.getElementById("my-div"); // it is the object has all our elemnets and methods propeties
let myTagElements = document.getElementsByTagName("p"); // id is unique so just only one but tag there is alot كيس ولم ورايا
let myClassElements = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".special");
let myQueryElement = document.querySelector(".my-span"); //هيجيب اول عنصر بس في الكائن
let myQueryAllElement = document.querySelectorAll(".my-span"); // هيجيب كل اللي يقابله

console.log(myIdElement);
console.log(myTagElements[0]);
console.log(myClassElements);
console.log(myQueryElement);
console.log(myQueryAllElement);

console.log(document.title);
console.log(document.body);
console.log(document.images);
console.log(document.forms[0].one.value);
console.log(document.links[0].href);

/*
  DOM [Get / set Elements Contenet And Attributes]
    innertHTML
    textContent
    Change Attributes Directly
    Change Attributes With Methods
      getAttribute
      SetAttribute

  Search
   innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement);
console.log(myElement.innerHTML); // return text and html as it you use it if you want to keep the html as it
console.log(myElement.textContent); // return text pure

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "";
document.images[0].alt = "Alternate";
document.images[0].title = "blue-Picture";
document.images[0].id = "blue";
document.images[0].className = "blue";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

/*
  DOM [Check Attributes]
    Element.attributes
    Element.hasArribute
    Element.hasArrtibute
    Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[2].attributes);

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") == "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
  console.log("Found");
} else {
  console.log("Not Found");
}

if (myP.hasAttributes()) {
  console.log("P Has Attributes");
}

if (document.getElementsByTagName("div")[7].hasAttributes()) {
  console.log("Has Attributes");
} else {
  console.log("Div Has No Attributes");
}

/*
  DOM [Create Elements]
    createElement
    createComment
    createTextNode
    createAttribute
    appendChild
*/

let myElement1 = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Prouct One");
let myComment = document.createComment("This is Div");

myElement1.className = "product";
myElement1.setAttributeNode(myAttr);
myElement1.setAttribute("data-test", "Testing");

// Append Text To Element ذيل
myElement1.appendChild(myText);

// Append Comment To Element
myElement1.appendChild(myComment);

//Append Element to Body
document.body.appendChild(myElement1);

console.log(myElement1);

/*
  DOM [Create Elements]
    practice product with Heading and Paragraph
*/

for (let i = 1; i <= 100; i++) {
  let myElement2 = document.createElement("div");
  let myHead3 = document.createElement("h3");
  let myPara = document.createElement("p");

  let myHead3Text = document.createTextNode("head3-Text" + i);
  let myParaText = document.createTextNode("para-text");

  myElement2.className = "product";
  myElement2.appendChild(myHead3);
  myHead3.appendChild(myHead3Text);
  myElement2.appendChild(myPara);
  myPara.appendChild(myParaText);

  //css style
  myElement2.style.cssText =
    "color: #b7c3c9;background-image: url(https://blue-action.eu/fileadmin/user_upload/blueaction/carousel/TommyAndreassen-northern-lights-6862969_1920.jpg);background-size: cover;background-position: center;height: 200px;font-size: 25px;width: 400px;display: inline-block;margin:2%;padding:5px;border-radius:8px;box-shadow: rgb(0 0 0 / 40%) 4px 4px 12px 0px, rgba(76, 175, 80, 0.56) 1px 6px 20px 0px inset;";
  document.body.appendChild(myElement2);
}

/*
  DOM [Deal with Childerns]
    children
    childrenNodes
    firstChild
    lastChild
    firstElementChild
    lastElementChild
*/

let myElement3 = document.getElementsByTagName("div")[8];

console.log(myElement3);
console.log(myElement3.children); //retrun elemnts only no text no comment
console.log(myElement3.children[0]);
console.log(myElement3.childNodes); //return all even text comment every thing
console.log(myElement3.childNodes[0]);

console.log(myElement3.firstChild); //first text or comment first child whatever its type
console.log(myElement3.lastChild); // last text

console.log(myElement3.firstElementChild); //first tag
console.log(myElement3.lastElementChild); //last tag

/*
  DOM [Events]
    Use Events On HTML
    Use Events On Js
      onclick
      oncontextmenu
      onmousenter
      onmouseleave

      oneload
      onscroll
      onresize

      onfocus
      onblur
      onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("clicked by js");
};

myBtn.oncontextmenu = function () {
  //click يمين
  console.log("clicked by js");
};

myBtn.onmouseenter = function () {
  // اول ما الماوس يلمس الزرار
  console.log("clicked by js");
};

myBtn.onmouseleave = function () {
  // اول اما تمشي وتسيب الزرار الكلمه هتظهر
  console.log("clicked by js");
};

window.onscroll = function () {
  console.log("scroll");
};

/*
  DOM [Events]
    Validate From Practice
    Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
console.log(ageInput);

document.forms[3].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    console.log("Valid");
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[3].onclick = function (event) {
  console.log(event);
  event.preventDefault(); //همنع السلوك الافتراضي
};

//week 13

/*
  DOM [Events simulation]
    click
    focus
    blur
*/

let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[4].click();
};

/*
  DOM [class List]
    classList
      length
      contains
      item(index)
      add
      remove
      toggle
*/

let element = document.getElementById("my-div2");

console.log(element.classList);
console.log(typeof element);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show")); // check if the class there or here or not🤔
console.log(element.classList.item("0")); //give me the index i will give you class name

// element.onclick = function () {
//   element.classList.add("add-one", "add-two"); //add classes
// };

element.onclick = function () {
  element.classList.remove("show"); //remove classes
};

element.onclick = function () {
  element.classList.toggle("osama"); // بيشتغل اي حاجه لقيته هحذفه مالقتهوش هضيفه
};
// add or remove dependson the condtition

/*
  DOM [CSS]
    style
    cssText
    removeProperty(propertyName) [Inline , Stylesheet]
    setProperty(propertyName, value , priority)
*/

element.style.color = "red";
element.style.fontWeight = "blod";

element.style.cssText = "font-weight:bold; color:green; opacity:0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

// console.log(document.styleSheets[0].cssRules) // let you to the future maybe we will know why this error 🐄

// let styleSheet = document.styleSheets[0];
// let rules = styleSheet.cssRules;

// console.log(rules);

/*
  DOM [Deal With Elements]
    before [Element || string] //قبل اوبعد بره العنصر 
    after [Element || String]
    append [Element || String]  بضيف الحاجه جوا العنصر 
    prepend [Element || String]
    remove
*/

let element3 = document.getElementById("my-div3");
let createdP = document.createElement("p");

element3.before("Hello from js");
element3.after(createdP);

element3.append("Hello from js"); // add in the end
element3.append(createdP);

element3.prepend("Hello from js first "); // add in the first

element3.remove(); // remove the element form the document page

/*
  DOM [Traversing]
    nextSibling
    previousSibling
    nextElementSibling
    previousElementSibling
    parentElement
*/

let span = document.getElementById("my-div4").children[1];

console.log(span.nextSibling); //return the next brother whatever its text or element or comment
console.log(span.nextElementSibling); //return the next element

console.log(span.previousSibling);
console.log(span.previousElementSibling);

span.onclick = function () {
  span.parentElement.style.opacity = "0";
};

/*
  DOM [cloning]
    cloneNode(Deep) Deep = mean i need to put true or false empty is mean false (it will take the only element with its attribute but not anything inside the element) true=> it mean take a reall copy for every thing 
*/

let myP1 = document.querySelectorAll("p")[4];
let myDiv = document.querySelectorAll("div")[11];

myP1.id = `${myP1.id}-clone`; // your id must be unique even you are a copy

myDiv.appendChild(myP1);
// شال البراجراف وحطه في قلب الدف when you use just appendShild
// it just take a copy from the p not the real one . if you use clonNode() empty = faluse that mean it will take the elmenet and its attribute but it will not take what inside the element whatever text or span

/*
  DOM [Add Event Listener]
    addEventListener
    Use Wihtout On
    Attach Multiple Events
    Error Test

  Search
    Capture & Bubbling JavaScript
    removeEventListener
*/

// myP1.onclick = function(){
//   console.log("Message From onclick");
// }

// myP1.onclick = onee;
// myP1.onclick = twoo; // line 2 will make overwirte on the first line and line 2 who will win and exctuted

// function onee() {
//   console.log("Message From onclick 1");
// }

// function twoo() {
//   console.log("Message From onclick 2");
// }

// myP1.addEventListener("click", function () {
//   console.log("Message From onclick 1 EventListnener");
// });

// myP1.addEventListener("click", twoo);
// myP1.addEventListener("click", onee);

// myP1.addEventListener("click", "string") // Erorr

myP1.onclick = function () {
  let newP = myP1.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone");

// cloned.onclick =function(){
//   console.log("Iam Cloned")
// }     Error

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log(e.target); // معناها العنصر اللي انا دوست عليه
  }
});

// challange 101 week 13

// create header
let myHeader = document.createElement("header");
myHeader.className = "website-head";

let myHeader_Div_One = document.createElement("Div");
myHeader_Div_One.textContent = "Elzero";

let myHeader_Div_Two = document.createElement("ul");

// Create and append four li elements directly
let listItem1 = document.createElement("li");
listItem1.textContent = "Home";
myHeader_Div_Two.appendChild(listItem1);

let listItem2 = document.createElement("li");
listItem2.textContent = "About";
myHeader_Div_Two.appendChild(listItem2);

let listItem3 = document.createElement("li");
listItem3.textContent = "Services";
myHeader_Div_Two.appendChild(listItem3);

let listItem4 = document.createElement("li");
listItem4.textContent = "Contact";
myHeader_Div_Two.appendChild(listItem4);

myHeader.appendChild(myHeader_Div_One);
myHeader.appendChild(myHeader_Div_Two);
document.body.appendChild(myHeader);

// css style for the header
myHeader.style.cssText =
  "display:flex;justify-content:space-between;align-items:center;background-color:rgb(207 193 193);padding:20px;";

myHeader_Div_One.style.cssText = "font-weight:bold;";

myHeader_Div_Two.style.cssText = "display:flex;list-style:none;gap:10px;";

// creat the main content
let myContent = document.createElement("div");
myContent.className = "content";
for (i = 1; i <= 15; i++) {
  let myProduct = document.createElement("div");
  myProduct.className = "product";
  myProduct.textContent = i;

  let myProductSpan = document.createElement("span");
  myProductSpan.textContent = "product" + i;

  myProduct.appendChild(myProductSpan);
  myContent.appendChild(myProduct);

  //css style
  myProduct.style.cssText =
    "width: 30%; height: 82px; background-color: white; display: flex; flex-direction: column; justify-content: center; align-items: center;line-height: 1;font-size: 20px;font-weight: bold;";
}

document.body.appendChild(myContent);

//css style for the content
myContent.style.cssText =
  "display: flex;justify-content: center;align-items: center;background-color: lightgray;gap: 10px;padding: 10px;flex-wrap:wrap";

//create footer
let myFooter = document.createElement("div");
myFooter.className = "footer";
myFooter.textContent = "copyright 2024";

document.body.appendChild(myFooter);

// css style for footer
myFooter.style.cssText =
  "background-color:rgb(207 193 193);font-size:19px;text-align:center;padding:20px;";

// week 14 🎉🎉🎉🎉🎉🎉🎉🎉🎉
//102
/*
  BOM {Browser Object Model}
    Introduction
      Window Object Is The Browser Window
      Windo Contain The Document Object 
      All Global Variables And Objects And Functions Are Members Of Winsow Object
        Test Document And Console
    What Can We DO With Window Object ?
      Open Window
      Close Window 
      Move Window
      Resize Window
      Print Document
      Run Code After Period Of Time Once Or More
      Fully Control The URL
      Fully Control The URL
      Save Data Inside Browser To Use Later
*/

//103
/*
  BOM {Browser Object Model}
    alert(Messgae) => Need No REsponse Only Ok Availabe
    confirm(Messgae) => Need Response And Return A Boolean
    Prompt(Message, Default Message) => Collect Data 
*/

// window.alert("Test"); //alert just give the user massage and that is it .
// this.alert("Test");
// alert("Test")

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("item Deleted");
// } else {
//   console.log("Item Not Deletd");
// }

// let promptMsg = prompt("Good Day To You ?" , "write day with three charatet");

// console.log(promptMsg);

//104
/*
  BOM {Browser Object Model}
    setTimeout (function, Timeout, Additional Params)
    clearTimeout (Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log("I am Message");
// }

// setTimeout(sayMsg, 3000 , "osama" , "36");

// function sayMsg(user , age) {
//   console.log(`I am Message for ${user} His Age is : ${age}`);
// }

// let counter2 = setTimeout(sayMsg, 3000);
// console.log(counter2);

// function sayMsg() {
//   console.log(`I am Message`);
// }

// let btu = document.querySelector(".clear.button");

// btu.onclick = function () {
//   clearTimeout(counter2);
// };

//105
/*
  BOM {Browser Object Model}
    setInerval(Function, Millseconds , Additional Params)
    clearIntervral(Identifier)
*/

// setInterval(function(){
//   console.log(`Msg`);
// },1000);

// setInterval(sayMsg ,1000);

// function sayMsg(){
//   console.log(`Iam Message`);
// };

// setInterval(sayMsg, 1000 , "osama" , 38);

// function sayMsg (user,age){
//   console.log(`Iam Message For ${user} His Age Is:${age}`);
// }

let divFive = document.querySelector(".five");

function countdown() {
  divFive.innerHTML -= 1;
  if (divFive.innerHTML === "0") {
    clearInterval(counter3);
  }
}


let counter3 = setInterval(countdown, 1000); //كل ثانيه ينفذ الكود مره او هيكرر الكود مره

console.log(divFive.innerHTML)

/*
  BOM {Browser Object Model}
    location object 
      href Get / Set [URL || Hash || file || Mail]
      Host 
      Hash 
      protocol
      reload()
      replace()
      assign

*/

// console.log(location)
// console.log(location.href);

// location.href = "https://google.com"
// location.href = "/#sec02"
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol)

// console.log(location.hash);

// location.replace(); // deleted the current page from the histroy not like href do not delet it and let it in the histroy

// location.assign(); // keep the page in the history do not remove it

//107
/*
  BOM {Broswer Object Model}
    open(URL [opt] , Window Name Or Target Attr [opt] , Win Features [opt] , History )
    close() //you can only close the window that you open it useing open 🐄
    Window Features
      Width [Num]
      height [Num]
      left [Num]
      top [Num]

  Search
    Window Open Window Features
*/

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=100");
// }, 2000);

//108
/*
  BOM {Broweser Object Model}
    Histroy API
      propetied
        length
      Mehods
        back()
        forward()
        go(Delta) => Postion In Histroy

  Search [For Advaced Knowledge]
   pushState() + replaceState()
*/

console.log(history);

//109
/*
  BOM {Browser Object Model}
    stop()
    print()
    focus()
    scrollTo(x ,y || Opetions) // بييدا من احداثيات معينه يعني بيدا من الزيرو 
    scroll(x , y || Options)
    scrollBY(x , y || Options) //يبدا من مكان مانتا واقف وبيدا يتحرك
*/

// let myNewWindow = window.open("https://google.com" , "" , "width=500,height=500")

// window.scrollTo({left:500,top:200,behavior:"smooth"})

/*
  DOM [Browser Object Model]
    practice => Scroll To Top
    scrollX [Alias = pageXOffest]
    scrollY [Alias = pageXOffest]
*/

// console.log(window.scrollX === window.pageXOffset)

let upButton = document.querySelector(".up.button")
console.log(upButton)

 upButton.style.cssText =
  "background-color:red;border:none;color:white;font-weight:bold;padding:6px;border-radius:4px;position:fixed;bottom:20px;right:20px;display:none;cursor:pointer;";

window.onscroll = function (){
  if(window.scrollY >= 600){
    // console.log(`scrolling Y value Is ${window.scrollY}`)
    upButton.style.display = "block";
  }else{
    upButton.style.display = "none";
  }
}

upButton.onclick = function (){
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth",
  })
}