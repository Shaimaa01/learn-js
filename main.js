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

function calc(...numbers) {  //Rest Parameters
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
