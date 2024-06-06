// // // // // // // // // // // // // // DECLARING VARIABLES ON (let, const, var)

// // // // // // // // // // // // //  //let (changeble varaible)
// // // // // // // // // // // // // //let x = 98;
// // // // // // // // // // // // // //x = 50;


// // // // // // // // // // // // // //console.log(x);

// // // // // // // // // // // // // //const (unchangeble varaible)


// // // // // // // // // // // // // //var
// // // // // // // // // // // // // //let myTime = "8AM";
// // // // // // // // // // // // // //let myTime = "10AM"

// // // // // // // // // // // // // //const a = 90;


// // // // // // // // // // // // // // rules of naming Vars
// // // // // // // // // // // // // // 1. var names must be logical
// // // // // // // // // // // // // // 2. Varaibles can start with letters _ , can not start with number, %, no word spacing
// // // // // // // // // // // // // // compound var - camelCasing (pascal casing)
// // // // // // // // // // // // //  //let myAccountNumber = 9022656120


// // // // // // // // // // // // // // reserved 


// // // // // // // // // // // // // //const countryOfBrith = "Nigeria";
// // // // // // // // // // // // // //console.log(countryOfBrith);
// // // // // // // // // // // // // //let currentLocation = "ikeja";
// // // // // // // // // // // // // //console.log(currentLocation);



// // // // // // // // // // // // // // Data types 
// // // // // // // // // // // // // // *primitive data types (holds one value) e.g 1. srtrings 2. numbers 3. boolean 4. null 5. undefined
// // // // // // // // // // // // // // <--STRINGS-->
// // // // // // // // // // // // // // - they are always denoted by quotation marks "  "

// // // // // // // // // // // // // const firstName = "Adam";
// // // // // // // // // // // // // const lastName = "Sandler";
// // // // // // // // // // // // // const midddleName = "Owen"
// // // // // // // // // // // // // //console.log(typeof firstName, firstName)


// // // // // // // // // // // // // // strings properties - length - join and strings methods ,

// // // // // // // // // // // // // //console.log(firstName.length)

// // // // // // // // // // // // // // strings concatenation (join strings together using + );
// // // // // // // // // // // // // const fullName = firstName + " " + midddleName + " " + lastName;
// // // // // // // // // // // // // console.log(fullName);
// // // // // // // // // // // // // console.log(fullName.length);

// // // // // // // // // // // // // // srtings method: are functions that can  be performed on strings 
// // // // // // // // // // // // // // formatting strings - toLowerCase, toUpperCase, trim, trimStart, trimEnd

// // // // // // // // // // // // // console.log(fullName.toLocaleUpperCase());
// // // // // // // // // // // // // console.log(fullName.toLocaleLowerCase());

// // // // // // // // // // // // // const myName = "         wale        ";
// // // // // // // // // // // // // console.log(myName, myName.length);


// // // // // // // // // // // // //  const result = myName.trim();
// // // // // // // // // // // // //  console.log(result, result.length);

// // // // // // // // // // // // // // methods to search a string: indexOf, lastIndexOf
// // // // // // // // // // // // // const email = "adamowen@google.com";
// // // // // // // // // // // // // console.log(email.includes ("adam"));
// // // // // // // // // // // // // console.log(email.startsWith ("adam"));
// // // // // // // // // // // // // console.log(email.endsWith ("adam"));


// // // // // // // // // // // // // // indexOf lastIndexOf ()
// // // // // // // // // // // // // console.log(email.indexOf ("a"));
// // // // // // // // // // // // // console.log(email.lastIndexOf("a"));


// // // // // // // // // // // // // // replace and replaceAll
// // // // // // // // // // // // // console.log(email.replace("a", "#"));
// // // // // // // // // // // // // console.log(email.replaceAll("a", "#"));


// // // // // // // // // // // // // // charAt ()
// // // // // // // // // // // // // console.log(email.charAt("0"));

// // // // // // // // // // // // // // concat ()
// // // // // // // // // // // // // console.log(email.concat("is my email"));


// // // // // // // // // // // // // // extracting portion of a string: 1. slice(start, end) 2. substring  3. substr(start, length)
// // // // // // // // // // // // // console.log(email);
// // // // // // // // // // // // // console.log(email.slice(0, 5));
// // // // // // // // // // // // // console.log(email.substring(0, 5)); 
// // // // // // // // // // // // // console.log(email.substr(0, 5));

// // // // // // // // // // // // // // *complex data types (holds more than  one value) e.g OBJECTS (objects, arrays)



// // // // // // // // // // // // const country =  "United states of America";
// // // // // // // // // // // // console.log(country);
// // // // // // // // // // // // console.log(country.length);
// // // // // // // // // // // // console.log("the best country is" + " " + country);
// // // // // // // // // // // // console.log(country.toLocaleUpperCase());
// // // // // // // // // // // // console.log(country.includes("k"));
// // // // // // // // // // // // console.log(country.startsWith("c"));
// // // // // // // // // // // // console.log(country.endsWith("m"));
// // // // // // // // // // // // console.log(country.charAt(2));
// // // // // // // // // // // // console.log(country.slice(0, 5));


// // // // // // // // // // // // a// <!--NUMBERS-->
// // // // // // // // // // // // const myAge = 65;
// // // // // // // // // // // // console.log(typeof myAge);
// // // // // // // // // // // // // math operators + - / * ** %
// // // // // // // // // // // // console.log(5 / 5);
// // // // // // // // // // // // console.log(7 % 7);
// // // // // // // // // // // // console.log(6 ** 2); 


// // // // // // // // // // // // // order of operation
// // // // // // // // // // // // 7 * 5 + 4 * 2;
// // // // // // // // // // // // // BEDMAS
// // // // // // // // // // // // console.log((2*4) / 36 - 5 ** 2);

// // // // // // // // // // // // // savings + 0r -
// // // // // // // // // // // // savings += 100000;
// // // // // // // // // // // // savings -= 20000;

// // // // // // // // // // // // // likes += 1 0r -= 1
// // // // // // // // // // // // likes++
// // // // // // // // // // // // likes--


// // // // // // // // // // // // // savings /=2   savings *=2


// // // // // // // // // // // // //temlate literal: allows us to format in variables in a string 
// // // // // // // // // // // const author = "Ghost"; 
// // // // // // // // // // // const title = "Shadow demon";
// // // // // // // // // // // const year = 1997;


// // // // // // // // // // // //the book 
// // // // // // // // // // // const bookDescription =`the book ${title} was written by ${author} in the year ${year}`; 
// // // // // // // // // // // console.log(bookDescription);


// // // // // // // // // // // // BOOLEAN: true or false
// // // // // // // // // // // // comparison operators <> <= >= ==
// // // // // // // // // // // //== loose equality()
// // // // // // // // // // // // === strict equality()
// // // // // // // // // // // console.log(6 > 5);
// // // // // // // // // // // //logical operation and &&(all strings must be true) or ||  (either 0f the sring) not ! 
// // // // // // // // // // // console.log(2 == 2 && 5 < 4);  
// // // // // // // // // // // console.log(2 == 2 || 5 < 4);


// // // // // // // // // // // //null and undefined
// // // // // // // // // // // let customer = null;
// // // // // // // // // // // console.log(customer); 


// // // // // // // // // // // //control flow: conditional statement
// // // // // // // // // // // //conditional statement: if, if else, else, if switch
// // // // // // // // // // // //if statement: if(condtion){block of code}
// // // // // // // // // // // if (true) {   
// // // // // // // // // // //     console.log("HERE");
// // // // // // // // // // // }



// // // // // // // // // // // //if else: if(condition){bof code} else {another block of code}


// // // // // // // // // // // const tayoHeight = 56;
// // // // // // // // // // // const kelvinHeight = 62;
// // // // // // // // // // // if (tayoHeight > kelvinHeight) {
// // // // // // // // // // //     console.log("tayo is taller than kelvin" );
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("kelvin is taller than tayo");
// // // // // // // // // // // }

// // // // // // // // // // // const age = 54;

// // // // // // // // // // // if(age >= 18) {
// // // // // // // // // // //     console.log("you are an adult");
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("you are not an adult"); 
// // // // // // // // // // // }

// // // // // // // // // // // // if a no is negative or positive 
// // // // // // // // // // // const num = -54;
// // // // // // // // // // // if(num> 0) {
// // // // // // // // // // //     console.log(`${num} is a positive number`);
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log(`${num} is a negative number`);
// // // // // // // // // // // }


// // // // // // // // // // // if(number > 0) {
// // // // // // // // // // //     console.log(`${num} is a positive number`);
// // // // // // // // // // // } else if {
// // // // // // // // // // //     console.log(`${numb} is a negative number`);
// // // // // // // // // // // }


// // // // // // // // // // const usersAge =  -30;

// // // // // // // // // // if (age >= 18 && usersAge <= 60) {
// // // // // // // // // //    console.log("stay in the main club"); 
// // // // // // // // // // } else if (usersAge < 18 && usersAge > 0) {
// // // // // // // // // //     console.log("stay in the children park");
// // // // // // // // // // } else if (usersAge == 100) {
// // // // // // // // // //     console.log("stay in the srcret club");
// // // // // // // // // // } else if (userAge > 60) {
// // // // // // // // //     console.log("stay in the polo club");
// // // // // // // // // }





// // // // // // // // const valuation = 1000000;
// // // // // // // // if (valuation > 15000000) {
// // // // // // // //     console.log("you are eligible for a loan between 15m - 30m");
// // // // // // // // } else if (valuation > 6000000) {
// // // // // // // //     console.log("you are eligble for a loan between 6m - 15m");
// // // // // // // // } else if (valuation > 3000000) {
// // // // // // // //     console.log("you are eligible foe a loan between 3m - 5m");
// // // // // // // // } else {
// // // // // // // //     console.log("you are not eligible for a loan");
// // // // // // // // }









// // // // // // // //java assignment 

// // // // // // // //dolphin average score
// // // // // // // const avg = (6 + 8) / 2


// // // // // // // //koalas average score

// // // // // // // const dolphinAverage = (( 96 + 108 + 89) / 3);
// // // // // // // const koalasAverage =  ( (88 + 91 + 110) /3);

// // // // // // // if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
// // // // // // //     console.log("team dolphin wins the trophy");
// // // // // // // } else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
// // // // // // //     console.log("team koalas wins the trophy");
// // // // // // // } else if (dolphinAverage == koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100) {
// // // // // // //     console.log("result is a draw");
// // // // // // // }else {
// // // // // // //     console.log("no team wins the trophy");
// // // // // // // }

// // // // // // // const dolphinAverage2 = (( 97 + 112 + 101) / 3);
// // // // // // // const koalasAverage2 =  ((109 + 95 + 123) / 3);

// // // // // // // if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
// // // // // // //     console.log("team dolphin wins the trophy");
// // // // // // // } else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
// // // // // // //     console.log("team koalas wins the trophy");
// // // // // // // } else if (dolphinAverage == koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100) {
// // // // // // //     console.log("result is a draw");
// // // // // // // }else {
// // // // // // //     console.log("no team wins the trophy");
// // // // // // // }

// // // // // // // const dolphinAverage3 = (( 97 + 112 + 101) / 3);
// // // // // // // const koalasAverage3 =  ((109 + 95 + 123) / 3);
// // // // // // // if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
// // // // // // //     console.log("team dolphin wins the trophy");
// // // // // // // } else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
// // // // // // //     console.log("team koalas wins the trophy");
// // // // // // // } else if (dolphinAverage == koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100) {
// // // // // // //     console.log("result is a draw");
// // // // // // // }else {
// // // // // // //     console.log("no team wins the trophy");
// // // // // // // }



// // // // // // // // conditioner statement: switch, ternary operat
// // // // // // // // *swtich
// // // // // // // const grade = "A";
// // // // // // // switch (grade) {
// // // // // // //     case "A":
// // // // // // //     case "a":
// // // // // // //     console.log("exellent")
// // // // // // // break
// // // // // // // }









// // // // // // // // arts science social science

// // // // // // // const falcutly = "";

// // // // // // // switch (falcutly) {
// // // // // // //     case "Arts":
// // // // // // //     case "arts":
// // // // // // //     console.log("your dean is prof. Ngozi and her office is on floor3");
// // // // // // //     break
// // // // // // //     case "Science":
// // // // // // //     case "science":
// // // // // // //     console.log("your dean is prof. Amara and her office is on floor3");
// // // // // // //     break
// // // // // // // }






// // // // // // // // tenary operation -  alternative if else statement
// // // // // // // // condition ? first action : second action 
// // // // // // // yay > nah ? console.log("the yah have it") : console.log("the nahs have it") ;


// // // // // // // // Pass1234$
// // // // // // // //const usersPassword = "Pass1234$";
// // // // // // // //const loginPaswword = prompt("Enter your passwprd :");

// // // // // // // //usersPassword == loginPaswword? console.log(Login Successfull) :  console.log("invalid credentials");

// // // // // // // // password length is greater than 8 -- password is recommended


// // // // // // const password = "Pass1234$";
// // // // // // const loginPaswword = prompt("Enter your passowrd");
// // // // // // loginPaswword.length > 8 ?
// // // // // // console.log("password is recommeended") : 
// // // // // // console.log("password is weak, so change it"); 


// // // // // // //type conversion and type correction
// // // // // // //type conversion: number, parseInt, parseFloat, +
// // // // // // const num1 = Number(prompt("enter first passw0rd");


// // // // // //  let str1 = "8";
// // // // // //  console.log(typeof str1);
// // // // // //  const converted =Number();
// // // // // //  const converted =parseInt();
// // // // // //  const converted =(parseFloat);
// // // // // //  const converted = +



// // // // // const alert1 = Number("10000");
// // // // // const alert2 = Number("56000");
// // // // // const alert3 = Number("7800");

// // // // // const totalAmount = (alert1 + alert2 + alert3);

// // // // // console.log(`your total fee is is  ${alert1, alert2 , alert3}`);

// // // // // //convert number to sring
// // // // // const num5 = 90;
// // // // // console.log(typeof num5)
// // // // // const converted= String
// // // // // (num5);
// // // // // console.log(typeof converted2);

// // // // // //coercion - force

// // // // // //BOOLEAN - true -false
// // // // // //TRUTHY AND FALSY VALUES
// // // // // //NUMBERS 0 is falsy value, null is falsy, undefined is falsy value
// // // // // //strings - all strings are truthy value
// // // // // console.log(Boolean(" "));
// // // // // if (null) {
// // // // //     console.log("yes");
// // // // // }



// // // // // //JAVASCRIPT MATH OBJECT - SQRT2
// // // // // console.log(Math.round(-2.7));
// // // // // // ceil-- rounds up
// // // // // console.log(Math.ceil(4.2));
// // // // // // floor-- rounds down
// // // // // console.log(Math.floor(8.9));
// // // // // //trunc - removes all of the decimal 
// // // // // // pow, sqrt, min, max, random
// // // // // console.log(Math.pow(10, 2));
// // // // // console.log(Math.sqrt(36));
// // // // // console.log(Math.min(65, 9, 0, -8, 98, 76));
// // // // // console.log(Math.max(65, 9, 0, -8, 98, 76));
// // // // //  //math random 0 - 1
// // // // //  console.log(Math.random());

// // // // //  // 0 and 10
// // // // //  console.log(Math.random() * 10);
// // // // //  console.log(Math.trunc(Math.random() * 10));



// // // // // // numbers- operators, order of operation (bedmos)



// // // // // class work 

// // // // const bill = 430;
// // // // const tip = bill >= 50 && bill <= 300 ? bill (15/100) : bill * (20 / 100);
// // // // const total = bill + tip;
// // // // console.log(`the bill was ${bill} and the tip was ${tip} and the total value is ${total}`);

// // // // const bill2= 40;
// // // // const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * (15/100) : bill2 * (20 / 100);
// // // // const total2 = bill2 + tip2;
// // // // console.log(`the bill was ${bill2} and the tip was ${tip2} and the total value is ${total2}`);


// // // // const bill3= 275;
// // // // const tip3= bill3 >= 50 && bill3 <= 300 ? bill3 * (15/100) : bill3 * (20 / 100);
// // // // const total3 = bill3 + tip3;
// // // // console.log(`the bill was ${bill3} and the tip was ${tip3} and the total value is ${total3}`);


// // // // <!--FUNCTIONS--> : they are block of codes that can be reused
// // // // functon functionName() {block of code};
// // // // a functionName must be invoked or called
// // // function welcomeUser () {
// // //     console.log("welcomeUser");
// // // }
// // // welcomeUser();

// // // // parameters ensure that functions are reuseable
// // function welcomeUser(name = "user", age = 90) {
// //      console.log(`welcome ${name} and your age is ${age}`);
// //  }
// // welcomeUser("Alex", 87);
// // welcomeUser("Jane", 76);
// // welcomeUser();

// // // write a function that logs the description of a user in this manner


// // function user(name, currentlocation) {
// //    console.log(`my name is ${name} and i stay at ${currentlocation}`);
// // }    
// // user("Yomi, America");


// // // write a function that calculation 

// // function userAge(currentYear, yearOfBirth) {
// //     console.log( `your current is ${currentYear- yearOfBirth}`);
// // }
// // userAge(2024, 1990); 

// // // if  number is positive or zero

// // function testNumber(num) {
// //     if (num < 0){
// //         console.log(`${num} is a positibe number`);
// //         console.log(`${num} is a negative number`);
// //         console.log(`${num} is a positibe number`); 
// //     }
// // }

// // //write a function to determine if a num
// //  function oddOrEven(number) {
// //     if (number % 2 === 0) {
// //     console.log(`${number} is an even number`);
// //    } else {
// //       console.log(`${number} is an odd number`);
// // }
// // oddOrEven(90);
// // oddOrEven(25);
// // oddOrEven(6); 
// // }


// // //return keyword in a function: is use to output a value from a fuction
// // //anything after a return keyword in a block of code is inaccessible

// // //square  every number in a parameter
// //  function squareNumbers() {
// //     return num ** 2;
// //  }
// // squareNumbers(5);

// function describeCountry("country", "population", "capitaCity"); {
//    return  `${country} has ${population} million people and the ${capitalcity}`;
//  const portugal = describeCountry("portugal", 90, "Lisbon");
// }


//function calcBMI(height, weight) {
//    const bmi = weight / height ** 2;
  //  return `the height is ${height} and the weight is ${weight}, so the bmi is ${bmi};
//}

//const test1 = calBIM(1.6, 60);

//function expresions
//const speak = function (name){
  //  console.log("hello" + name);
//}

//hosting: js take all function declaration it takes to the top of the page
 //const greeting = function() {
 //};
 //greeting();

 //arrow function is more modern way of writinf function
 //const myLogger = (a, b, c) => a * b * c; //one line only

 //const myLogger2 = (a, b, c) => {
   // const product = a * b * c;
    //return product;

    //const squareNumbers2 = (num) => num ** 2;
 //}


 // write a function that calculate average of 3 numbers
 //const calcAverage = (a, b ,c) => (a + b + c)/ 3;
 //const result = calcAverage(44, 23, 71);
 //const result2 = calcAverage(65, 54, 49);
//console.log(result);




//ASSIGNMENT

//const calcNum = (num) => num + 1;
//const passNum1 = calcNum(10);
//const passNum2 = calcNum(15);
//const passNum3 = calcNum(32);
//console.log(passNum1);
//console.log(passNum2);
//console.log(passNum3);

//Age to days

//const userAge = (ageInYears) =>  ageInYears * 365;
//const ageInDays1 = userAge(25);
//const ageInDays2 = userAge(18);
//const ageInDays3 = userAge(56);
//console.log(`${ageInDays1} days`);
//console.log(`${ageInDays2} days`);
//console.log(`${ageInDays3} days`);


// less than 100

//function testNumber(num1, num2) {
  //if (num1 + num2 < 100) {
    //console.log("true");
  //} else {
    //console.log("false");
  //}
 //}


 //
// const numbers = (wins, draw, loss) => w * 3 + d * 1; 



// loops and recursion: for, while, do..while loop
// for (initializer; condition; increment){ block of code }

//for (let i = 0; i < 10; i++) {
  //console.log("the curren value of i is : " + i);
//}

// program that clculate the sum of numbers btw 1 - 200
//let sum = 0
//for ( let i = 1; 1 <=100; i++) {
  //sum += i;
  //console.log("sum");
//}

// while loop
// let x = 0;
// while (x < 5) {
//   console.log(x);
//   x++;
// }

// do..while loop: will run at least once
//  let y = 2
//  do {
//   console.log("the value of Y is" + y);
//   y++;
//  }while(y < 1);


 // JAVA PRT 2

// complex data types - arrays, objects
// <--arrays-->
// arrays are named as pluras. 
// they have elements and they are seperated by ,
//  const students = ["kelvin", "yomi", "felix"];
//  console.log(students);  
//  const numbers = [6, 7, 8];

// // array properties: length
// console.log(students.length);

// // position
// console.log(students[2]);

// // change element in an array 
// students[0] = "Ade";
// students[3] = "Tobi";
// console.log(students);

// // Array methods: adding and removing from arrays
// // adding: push(add element to the end), unshift(add element to the start)
// students.push("Tayo");
// console.log(students);
// students.push("Christian");
// console.log(students);
// students.unshift("Sylvia");
// console.log(students);

// // removing elements: pop(removes element from the end), shift(remove element from the start)
// students.pop();
// students.shift();
// console.log(students);
// console.log(students.pop());

// // more array methods: 
// // includes
// console.log(students.includes('Tonia'));

// // reverse
// console.log(students.reverse());

// // concat
// const newStudents = students.concat(["Samuel", "Pelumi"]);
// console.log(newStudents);

// // indexOf 
// console.log(students.indexOf("Tonia"));

// // slice
// console.log(students.slice(0, 2));
// console.log(students.join("-"));
// console.log(students.toString());

// // higher array methods: map, filter, find, sort, forEach, reduce
// // sort
// const cars = ["Toyota", "BMW", "Benz", "Ford", "Mazda",];
// console.log(cars.sort());

// const points = [40, 100, 1, 5, 10, 25];
// const arranged = points.sort((a, b) => a - b); 
// console.log(arranged);

// // map: used to loop over an element in an array and return a value,  forEach: performs a specified function for each element in the array
// // for each
// cars.forEach((car, index) => {
//   console.log(index, "I own a" + " " + car);
// })

// // map
// points.map((point , index) => {
//   console.log(point);
// });

// let balance = 80000;
// const transactions = [3000, 45000, -525, -10000, 32000];
// transactions.push(50000)
// transactions.push(-4500);
// transactions.pop();

// transactions.map((transaction) => {
//   if (transaction > 0) {
//     console.log(`you have a credit of ${transaction} Naira`);
// } else {
//   console.log(`you have a debit of ${transaction} Naira`);
// }
//   return (balance += transaction);
// });
// console.log(`the current balance is ${balance}`);

// // filter return every elements that fits a search condition
// const yourCredits = transactions.filter((transaction) => transaction > 0);
// console.log(yourCredits);
// const yourDebits = transactions.filter((transaction) => transaction < 0);
// console.log(yourDebits);

//  transactions.push(2000000);
//  const fraudAlert  =transactions.find((transaction) => 2000000);
//  console.log(fraudAlert);
//  if (fraudAlert); {
//   console.log("Suspend account");
//  }

// map
//const cartPrices = [4000, 3200, 560, 10000];
// let total = 0;
// cartPrices.map((price) => {
//   total += price;
// });

// reduce
// const cartPrices = [4000, 3200, 560, 10000];
// const vat = 345;
// const total = cartPrices.reduce((prev, curr) => {
//   return prev + curr;
// }, vat);
// console.log(total);

// const tests = ["Wale", "Ade", "Bayonle", "Ngozi"];
// const result = tests.filter((test) => tests.length >= 4);
// console.log(result)

// // find: returns the first element that fits a search condtion
// const result2 = tests.filter((test) => tests.length >= 5);
// console.log(result2);

// // class work
// const users1 = ['mark', "Collins", "Beckendorf", "Tyson", "Percy", "Anabeth" ];
// console.log(users1.length);

// const users2 = ["Phoebe", "Fiona"];
// console.log(users2.length);
// users1 == users2 ? console.log("true") : console.log("false") ;  

// users1.push("Bolaji");
// console.log(users1);
// users2.push("Fiona");
// console.log(users2);

// users1.forEach ((users1, index) => {
// console.log(`the current user is : ${users1}`)
// });

// const filteredusers = users1.filter((user1) => user1.length > 5 );
// console.log(filteredusers);

// console.log(users1.reverse());


// ARRAY DESTRUCTURING

// const customers = ["Shao kahn", "Liu kang", "Kung Lao", "Raiden", "Kitana"];
// console.log(customers);
// const [, , , third] = customers;
// console.log(third);

// // rest are seperated by ... and works on the left side also comes last in the destructuring pattern
// const [, first, ...others] =customers;
// console.log(others);
// const [...players] = customers;
// console.log(players);

// // spread operator: works on the right and are also seperated by ...
// const developingCountries = ["Nigeria", "Brazil", "Ghana", "Togo", "Iraq"];
// const developedCountries = ["USA", "Germany", "UK", "Switzerland"];
// const newCountries = [
//   "Afghanistan",
//   ...developedCountries,
//   "Norway",
//   ...developingCountries,
//   "Portugal",
// ];
// console.log(newCountries);

// Array methods
// declare a var calleed balance
// let balance = 2000;

// //create a tr
// const transactions = [3000, -2000, 20000, 4000, 500, -200, -2000];
// // at some point a new transaction of 5000 credits was done 
//  transactions.push(5000);
//  transactions.pop(); 

//  // generate a simple statement of account; 
// transactions.map((amount) => {
//   if (amount > 0) {
//     console.log(`${amount} has been credited`);
//   } else {
//     console.log(`${amount} has been debited`);
//   }
// });
// // check if 8500 is included
// const checkAmount = transactions.includes(8500);
// if (checkAmount){
//   console.log("Yes, it is your transaction");
// } else {
//   console.log("No it is not there")
// }

// //filter out credits and debits amount into seperate arrays
// const credits = transactions.filter((transaction) => transaction > 0);
// console.log(credits);
// const debits = transactions.filter((transaction) => transaction < 0);
// console.log(debits);

// // calculate the available balance for this user using the reduce method
// const availableBalance = transactions.reduce((prev, curr) => {
//   return prev + curr
// }, balance);
// console.log(availableBalance);

// //loan amount must be <= availableBalance * 2
// const checkLoanEligibilty = (amount) => {
//   if (amount <= availableBalance *2) {
//     console.log(`you are eligible for a loan ${amount}`);
//   } else {
//     console.log(`you are not eligible for a loan ${amount}`);
//   }
// };
// checkLoanEligibilty(5000);
// checkLoanEligibilty(100000);
// checkLoanEligibilty(20000);

// //write a function to check the transfer status of  an amount
// const transferStatus = (amount) => {
//   if (amount <= availableBalance) {
//     console.log("transaction successful");
//   } else {
//     console.log("insufficcient funds");
//   }
// } 
// transferStatus(5000);
// transferStatus(1000);
// transferStatus(50000);
 
// // limit amount
// const limit = 30000;
// function depositamount(amount) {
//   amount > limit ? console.log("Account restricted") : console.log("deposit succeful");
// }
// depositamount(50000);
// depositamount(2000);

// // OBJECTS
// // const person = ["John", "doe", 76, "Developer", "Google", "Seattle", true];

// //key: value,
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 45,
//   job: "Backend Engineer",
//   location: "Athens",
//   isMarried: true,
//   friends: ["Peter", "Jane", "Mario"],
//   previousWork: {
//     google: {
//       role: "Software tester",
//       duration: "5 years",
//     },
//     microsoft: {
//       role: "Junior Backend Dev",
//       duration: "6 years",
//     },
//   },
// };

// console.log(person.previousWork.google.role);

// //access properties inside of an object
// // dot notation objName.propertyName , bracket notation objName['propertyName']

// console.log(person.age);
// console.log(person["age"]);
// console.log(person.location.toUpperCase());
// console.log(person["lastName"].toUpperCase());
// console.log(person.friends[0]);

// //add properties to an object

// person.nickName = "Johnny";
// person.canDrive = false;
// console.log(person);

// person.previousWork.konga = {
//   role: "Intern",
//   duration: "6 months",
// };

// // remove property from an object delete

// delete person.age;
// delete person.previousWork.konga;
// console.log(person);

// const book = {
//   title: "Demon Slayer",
//   author: "Ghost Damon",
//   yearPublished: 1995,
//   rating: 4.2,
//   amount: 4.56,
//   similarBooks: [
//     {
//       id: 1,
//       title: "In the Den",
//     },
//     {
//       id: 2,
//       title: "Jungle kids",
//     },
//   ],
//   publisher: "Oxford",
//   description: function () {
//     console.log(
//       `The Book ${this.title} is rated ${this.rating} is written by ${this.author}`
//     );
//   },
//   purchaseBook: function () {
//     console.log(this.amount, this.rating);
//   },
// };

// book.similarauthors = ["John", "Peter", "Mark"];
// book.similarBooks[1].id;

// book.description();
// book.purchaseBook();

// // object methods - functions that are written to act on the object
// // objects destructing - allows to pick multiple properties from an object

// const car = {
//   brand: "benz", 
//   numOfDoors: 4,
//   horsePower: "4.5hp",
//   color: "Black",
//   type: "Sedan",
//   similarBrands: {
//     porsche: {
//       color1: "Black",
//     },
//     bugatti: {
//       color2: "red",
//     },
//   },
// };

// const {
//   brand, 
//   numOfDoors, 
//   type, 
//   horsePower, 
//   color,
//   similarBrands: {
//     porsche: {color1},
//     bugatti: {color2},
//   },
//  } = car;
// console.log(brand, type);

// // keys, values
// // object.keys(objName)
// console.log(Object.keys(car));

// console.log(Object.values(car));
// console.log(Object.entries(car));

// const students = [
//   {
//     fullname: "Quam IDK",
//     age: 65,
//     role: "frontend Engineer",
//   },
//   {
//     fullname: "Felix Mouka",
//     age: 34,
//     role: "Backend Engineer",
//   },
//   {
//     fullname: "Yomi Brown",
//     age: 18,
//     role: "Fullstack Engineer",
//   },
//   {
//     fullname: "Kelvin Bassey",
//     age: 22,
//     role: "Product Manager",
//   },
//   {
//     fullname: "Tonia Ezinne",
//     age: 33,
//     role: "Tecnical Writer",
//   },
// ];
 
// console.log(students);

// console.log(`Numbers of student is ${students.length}`);

// students.map((student) => {
//   console.log(student.fullname);
// });

// // list of the engineers
// const engineers = students.filter((student) =>
//   student.role.includes("Engineer")
// );
// console.log(engineers);

// // older than 30
// const older = students.filter((student) => 
//   student.age > 30 
// );
//  console.log(older);


// // younger than 30

// const younger = students.filter((student) => 
//   student.age < 30 
// );
//  console.log(younger);

// // roles of students
//  students.map((student) => {
//   console.log(student.role);
//  });
  
// //students.map((student) => {
//   //const {role, fullname, age}, 
// //})


// const shoppingCart = [
//   {
//     id: 1,
//     item: "Black Hoodie",
//     price: 15000,
//   },
//   {
//     id: 2,
//     item: "Jean",
//     price: 24000,
//   },
//   {
//     id: 3,
//     item: "Sweatshirt",
//     price: 12000,
//   },
//   {
//     id: 4,
//     item: "Cap",
//     price: 7000,
//   },
// ];
//  // diplay all of the item and the price in the console
//  shoppingCart.map((cartItem) => {
//   const {item, price} = cartItem;
//   console.log(item, price);
//  });

// // calcukate the total price - use reduce
// const totalPrice = shoppingCart.reduce((prev, curr) => {
//   return prev + curr.price;
// }, 0);
// console.log(totalPrice);



// build a simple ATM machine
// creat a customer that has two properties - pin and balance
// const customer = {
//   pin: "1234",
//   balance: 20000,
//   checkBalance: function (pinEntered) {
//     if (pinEntered === this.pin) {
//       console.log(`Your Account balance is ${this.balance}`);
//     } else {
//       console.log("Incorrect Pin");
//     }
//   },
//   withdraw: function (pinEntered, amount) {
//     if (pinEntered === this.pin) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(
//           `You have withdrawn ${amount}. Your new balance is ${this.balance}`
//         );
//       } else {
//         console.log("Insufficient funds");
//       }
//     } else {
//       console.log("Incorrect pin");
//     }
//   },
//   deposit: function (pinEntered, amount) {
//     if (pinEntered === this.pin) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(
//           `You have Deposited ${amount}. Your new balance is ${this.balance}`
//         );
//       } else {
//         console.log("Invalid Deposit Amount");
//       }
//     } else {
//       console.log("Incorrect pin");
//     }
//   },
// };

// customer.checkBalance("14567");
// customer.withdraw("1234", 4000);
// customer.deposit("1234", 25000);
// customer.withdraw("1234", 1000);
// customer.withdraw("1234", 45000);


// // ASYNCHRONOUS JS

// console.log(1);
// console.log(1);

// setTimeout(() => {
//   console.log(3);
// }, 3000);

// console.log(4);
// console.log(5);


// // fetching data from an API

// // methods of interacting with an API
// // https request methods: GET, POST, PATCH, DELETE
// // dummy datas

// // fetch request to 
// const apiLink = "https://jsonplaceholder.typicode.com/users";
// // fetch
// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
//  };
  
// getData(apiLink);
// getData("https://fakestoreapi.com/products");

// // local storage: setItem, getItem, clear, removeItem
// localStorage.setItem("theme", "dark-theme");
// localStorage.setItem("isLoggedIn", true);

// const isUserLoggedIn = localStorage.getItem("isLoggedIn");
// console.log(isUserLoggedIn);
// localStorage.removeItem("isLoggedIn");
// localStorage.clear();


// // GLOBAL AND LOCAL SCOPED VARIABLE
// const manager =  "John";
//  console.log(manager +"Global");
//  function checkManager() {
//   const branchManager = "Susan"
//   const manager = "ADE";
//   console.log(branchManager);
//   console.log(manager);
//  };

// if (true) {
//   const A = 9;
//   console.log(A);
// };
// // console.log(A);


// // food delivery app
// // locations (map, real life loaction)
// // customers details
// // restaurants details (real time food)
// // payments - process



