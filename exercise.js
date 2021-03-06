// /********************************************************
//     OBJECTS AND FUNCTIONS
//     ********************************************************/

// /* Function constructor  */

// /*let mat = {
//         //Object literal
//         name: 'Matthew',
//         sex: 'Male',
//         job: 'Student',
//         isMarried: false,
//     };

//     function Biodata(name, sex, job, isMarried, yearOfBirth, year) {
//         this.name = name;
//         this.sex = sex;
//         this.job = job;
//         this.isMarried = isMarried;
//         this.yearOfBirth = yearOfBirth;
//         this.year = year;
//     }
//     // Inheritance
//     Biodata.prototype.calculateAge = function () {
//         return this.year - this.yearOfBirth;
//     }

//     Biodata.prototype.tribe = 'Yoruba';

//     let bola = new Biodata('Bola', 'Female', 'Student', true, 1994, 2020);
//     let tolu = new Biodata('Tolu', 'Female', 'Doctor', true, 1969, 2020);
//     let jide = new Biodata('Jide', 'Male', 'Tailor', true, 1970, 2020);

//     bola.calculateAge());
//     tolu.calculateAge());
//     jide.calculateAge());
//     bola.tribe)
//     tolu.tribe)
//     jide.tribe)*/

// /* Object.create */

// /*let biodata = {
//         calculateAge: function () {
//             return this.year - this.yearOfBirth;
//         }
//     }

//     let bola = Object.create(biodata);
//     bola.name = 'Bola';
//     bola.yearOfBirth = 1972;
//     bola.year = 2020;

//     let tolu = Object.create(biodata, {
//         name: {
//             value: 'Tolu'
//         },
//         yearOfBirth: {
//             value: 1991
//         },
//         sex: {
//             value: 'female'
//         }
//     })

//     tolu);*/

// /**************************************************
//      FUNCTIONS
//     ***************************************************/
// ////////////////////////////
// // Call back functions

// /*let smiths = [1966, 1971, 1996, 1998, 2002];
//     let johnsons = [1927, 2008, 1991, 2011, 2015]

//     calcAge = (x) => {
//         let res = [];
//         for (let i = 0; i < x.length; i++) {
//             res.push(2020 - x[i]);
//         };
//         return res;
//     }

//     function calculateAge(x) {
//         return 2020 - x
//     }

//     function getAverage(x) {
//         let res = 0;
//         for (let i = 0; i < x.length; i++) {
//             res += 2020 - x[i]
//         }
//         return res / x.length
//     }

//     isFullAge = (x) => {
//         let res = [];
//         for (let i = 0; i < x.length; i++) {
//             if (2020 - x[i] > 18) {
//                 res[i] = x[i] + ': ' + calculateAge(x[i]) + ', Enjoy your drink';
//             } else {
//                 res[i] = x[i] + ': ' + calculateAge(x[i]) + ', Wait a few more years :)';
//             };
//             res[i]);
//         };
//     }

//     function getAge(arr, fxn) {
//         return (fxn(arr));
//     }

//     let ages = getAge(smiths, calcAge);
//     ages();
//     let aveAges = getAge(smiths, getAverage);
//     aveAges);
//     let fullAge = getAge(johnsons, isFullAge);
//     fullAge();*/

// ////////////////////////////////////
// // Functions returning functions

// /*function getNationality(nationality) {
//         switch (nationality) {
//             case 'Nigeria':
//                 return (name, state) => console.log(name + ' is from ' + state + ' State of Nigeria.');
//                 break;
//             case 'USA':
//                 return (name, state) => console.log(name + ' is from ' + state + ', United States.');
//                 break;
//             default:
//                 return (name, state) => console.log(nationality + ' is a great country I\'m sure ' + name + ' :)');
//         };
//     }

//     let country = getNationality('Nigeria');
//     country('Tunde', 'Ekiti');
//     getNationality('USA')('Skyler', 'New Jersey');
//     getNationality('Ghana')('Gyan', 'Accra');*/

// /////////////////////////////////////////////////
// // Immediately Invoked Function Expression(IIFE)
// /*(
//         function (score) {
//             console.log((score / 60) * (100) + '%');
//         }
//     )(45);*/

// ///////////////////////////////////////////////////
// // Closures

// /*function retirement(retirementAge) {
//         var a = ' years left until retirement.';
//         return function (yearOfBirth) {
//             var age = 2016 - yearOfBirth;
//             console.log((retirementAge - age) + a);
//         }
//     }

//     var retirementUS = retirement(66);
//     var retirementGermany = retirement(65);
//     var retirementIceland = retirement(67);

//     retirementGermany(1990);
//     retirementUS(1990);
//     retirementIceland(1990);

//     //retirement(66)(1990);

//     function interviewQuestion(job) {
//         return function (name) {
//             if (job === 'designer') {
//                 console.log(name + ', can you explain what UX design is?');
//             } else if (job === 'teacher') {
//                 console.log('What subject do you teach, ' + name + '?');
//             } else {
//                 console.log(`What do you do as a ${job}, ${name}?`);
//             };
//         };
//     }
//     interviewQuestion('teacher')('Mark');
//     interviewQuestion('pilot')('Bisola');*/

// ////////////////////////////////////////////////////
// // Call method

// /*let obinna = new Object();
//     obinna.name = 'Obinna';
//     obinna.job = 'developer';
//     obinna.age = 24;
//     obinna.presentation = function (style, time) {
//         if (style === 'formal') {
//             console.log(`Good ${time} ladies and gentlemen. I am ${this.name}, a ${this.age} year old ${this.job}.`);
//         } else if (style === 'friendly') {
//             console.log('How far guy? I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.job + '. How\'s your ' + time + ' going?');
//         } else {
//             console.log('Be right back ;)');
//         };
//     };

//     let eeman = {
//         name: 'Eeman',
//         job: 'engineer',
//         age: 35
//     }

//     obinna.presentation('friendly', 'afternoon');
//     obinna.presentation.call(eeman, 'formal', 'morning');

//     ///////////////////////////////////////////////////
//     // Apply method
//     obinna.presentation.apply(eeman, ['friendly', 'evening']);

//     ///////////////////////////////////////////////////
//     // Bind method
//     let intro = obinna.presentation.bind(obinna, 'formal', 'morning');
//     console.log(intro());

//     var years = [1990, 1965, 1937, 2005, 1998];

//     function arrayCalc(arr, fn) {
//         var arrRes = [];
//         for (var i = 0; i < arr.length; i++) {
//             arrRes.push(fn(arr[i]));
//         }
//         return arrRes;
//     }

//     function calculateAge(el) {
//         return 2016 - el;
//     }

//     function isFullAge(limit, el) {
//         return el >= limit;
//     }

//     let aages = arrayCalc(years, calculateAge);
//     console.log(aages);
//     let ages = arrayCalc(aages, isFullAge.bind(this, 20));
//     console.log(ages);*/

// //////////////////////////////////////////////////
// // CODING CHALLENGE

// /*(function () {
//     let reading, principalBMC, govOyo, arithmetic, developer;
//     let score = 0;

//     function CreateQuestion(question, answers, correctAnswer) {
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }

//     CreateQuestion.prototype.Question = function () {
//         console.log(this.question);
//         for (let i = 0; i < this.answers.length; i++) {
//         const ans = this.answers[i];
//         console.log(ans);
//         }
//     };

//     CreateQuestion.prototype.checkAnswer = function (ans) {
//         if (ans === this.correctAnswer) {
//         console.log('----------------------------------------------------');
//         console.log('Awesome!');
//         console.log(`Score: ${++score}`);
//         console.log('----------------------------------------------------');
//         } else {
//         console.log('----------------------------------------------------');
//         console.log('Wrong answer!');
//         console.log(`Score: ${score}`);
//         console.log('----------------------------------------------------');
//         }
//     };

//     reading = new CreateQuestion('Is reading good?', ['0: Yes', '1: No'], '0');
//     principalBMC = new CreateQuestion(
//         'Who is the principal of BMCSS?',
//         ['0: Mr. Adebayo', '1: Mrs. Ezekiel', '2: Mr. Ewetola'],
//         '1'
//     );
//     govOyo = new CreateQuestion(
//         'Who is the gov of Oyo State?',
//         ['0: Makinde', '1: Ajimobi', '2: Akala'],
//         '0'
//     );
//     arithmetic = new CreateQuestion(
//         'What is the sum of 3 and 5?',
//         ['0: Eight(8)', '1: Seven(7)', '2: Six(6)', '3: Five(5)'],
//         '0'
//     );
//     developer = new CreateQuestion(
//         'Who will become the best developer in the world?',
//         ['0: Jack', '1: Kylie', '2: Olamide', '3: Favour'],
//         '2'
//     );

//     let questionArray = [reading, principalBMC, govOyo, arithmetic, developer];

//     function getQuestion() {
//         let n = Math.floor(Math.random() * questionArray.length);
//         questionArray[n].Question();

//         let userAnswer = prompt('Please choose an option.');
//         questionArray[n].checkAnswer(userAnswer);

//         if (userAnswer === 'exit') {
//         console.log(`Total score: ${score}`);
//         return;
//         } else {
//         getQuestion();
//         }
//     }
//     getQuestion();
//     })();*/

// /****************************************************
//             ES2015(ES6)
//     *****************************************************/
// /////////////////////////////////////
// //DESTRUCTURING

// /*let [name, age] = ['Ola', 24];
//     console.log(name, age);

//     const obj = {
//     firstName: 'Olamide',
//     lastName: 'Olaniyan',
//     };

//     let { firstName, lastName } = obj;
//     console.log(`${firstName} ${lastName}`);

//     let { firstName: a, lastName: b } = obj;
//     console.log(`${b} ${a}`);

//     function calculateAge(year) {
//     let age = new Date().getFullYear() - year;
//     return [age, 65 - age];
//     }

//     [age, retirement] = calculateAge(1996);
//     console.log(age, retirement);

//     ////////////////////////////////////////////
//     // ARRAYS

//     for/of loop

//     const ages = [11, 15, 12, 22, 17, 16];

//     console.log(ages.findIndex((age) => age >= 18));

//     console.log(ages.find((age) => age >= 18));

//     //String/array method include();
//     console.log(ages.includes(22)); //returns boolean value, good for if statements
//     */

// ///////////////////////////////////////////////
// //SPREAD OPERATOR

// //In ES5 an array can be passed as an argument of a function using the apply method

// /*const ages = [12, 18, 34, 9, 56, 15];
//     function sumAges(a, b, c, d, e, f) {
//     return a + b + c + d + e + f;
//     }
//     console.log(sumAges.apply(null, ages));

//     //In ES6 we can use the spread operator

//     console.log(sumAges(...ages));

//     const familySmith = ['John', 'Bob', 'Jane'];
//     const familyMiller = ['Mark', 'Ralph', 'Diane'];
//     const bigFamily = [...familySmith, 'Laura', ...familyMiller];
//     console.log(bigFamily);

//     // '...' also works on node lists
//     */

// //////////////////////////////////////////////////////
// //REST PARAMETER

// //ES5 functions have an array-like variable 'arguments'
// //that is a list o all arguments passed into the fxn. ES6 uses rest parameter instead which returns a true array

// /*
//     let isFullAge = (...years) => {
//     console.log(years);

//         let ans = years.forEach((year) => {
//         console.log(new Date().getFullYear() - year >= 18);
//         });
//     };

//     isFullAge(1981, 2009, 1999, 2003, 2000, 2005);

// let ages = [1981, 2009, 1999, 2003, 2000];
// let isFullAge = (limit, ...years) => {
//   console.log(years);

//   let ans = years.forEach((year) => {
//     console.log(new Date().getFullYear() - year >= limit);
//   });
// };

// isFullAge(21, ...ages); //Or we could just pass the arguments individually
// */

// ///////////////////////////////////////////////////////
// //DEFAULT PARAMETERS
// /*
// const FalanaPerson = function (firstName, yearOfBirth, lastName = 'Falana', nationality = 'nigerian') {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// };

// let bolu = new FalanaPerson('Bolu', 2000);
// console.log(bolu);
// let bukola = new FalanaPerson('Bukola', '1992', 'Ray', 'american');
// console.log(bukola);
// */

// ////////////////////////////////////////////
// //MAPS
// /*
// const question = new Map();
// question.set('question', 'What is the official name of the latest major Javascript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'You are correct!');
// question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// //console.log(question.size);

// //if (question.has(4)) {  question.delete(4);}
// //question.clear();

// // question.forEach((value, key) => {
// //   console.log(`This is ${key} set to ${value}`);
// // });

// for (let [key, value] of question.entries()) {
//   if (typeof key === 'number') {
//     console.log(key + ': ' + value);
//   }
// }

// let ans = parseInt(prompt('Enter choice'));
// console.log(question.get(ans === question.get('correct')));
// */

// ////////////////////////////////////////////////
// //CLASSES
// /*
// class Person {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     //console.log(age);
//     return age;
//   }

//   static greeting() {
//     //console.log('Hello World!');
//     return 'Hello World!';
//   }
// }

// const john = new Person('John', 1996, 'developer');
// */

// //////////////////////////////////////////////////
// // SUBCLASSES

// //ES5
// /*
// function Person5(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//   return new Date().getFullYear() - this.yearOfBirth;
// };

// function Athlete5(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//   //this.medals++;
//   console.log(this.medals + ' medals');
// };

// let johnAthlete5 = new Athlete5('John', 1996, 'swimmer', 2, 10);
// */

// //ES6
// /*
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     //console.log(age);
//     return age;
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }

//   wonMedal() {
//     //this.medals++;
//     return this.medals + ' medals';
//   }
// }

// const johnAthlete6 = new Athlete6('John', 1996, 'swimmer', 2, 12);
// */

// /*******************************************************************************
//  CODING CHALLENGE
// ********************************************************************************/
// /*
// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }

// class Park extends Element {
//   constructor(name, buildYear, treeNum, parkArea) {
//     super(name, buildYear);
//     this.treeNum = treeNum;
//     this.parkArea = parkArea;
//     this.treeDensity = 0;
//     this.age = 0;
//   }
//   getTreeDensity() {
//     this.treeDensity = Math.round(this.treeNum / this.parkArea);
//     return this.treeDensity;
//   }
//   getAge() {
//     this.age = new Date().getFullYear() - this.buildYear;
//     return this.age;
//   }
// }

// class Street extends Element {
//   constructor(name, buildYear, strLength) {
//     super(name, buildYear);
//     this.strLength = strLength;
//   }
// }

// const green = new Park('Green Park', 1975, 532, 0.5);
// const oak = new Park('Oak Park', 1905, 1525, 1.2);
// const national = new Park('National Park', 1952, 932, 0.6);
// green.getTreeDensity();
// green.getAge();
// oak.getTreeDensity();
// oak.getAge();
// national.getTreeDensity();
// national.getAge();

// const str4 = new Street('4th Street', 1982, 1.2);
// const sunset = new Street('Sunset Boulevard', 1905, 0.2);
// const ocean = new Street('Ocean Avenue', 2002, 0.6);
// const moore = new Street('Moore Road', 2012, 0.4);

// const getAveAge = (...park) => {
//   //sumAges can be calculated using Array.prototype.reduce();
//   let [green, oak, national] = park;
//   let ageArr, sumAges, aveAge;

//   ageArr = [green.age, oak.age, national.age];
//   sumAges = 0;
//   ageArr.forEach((age) => (sumAges += age));
//   aveAge = sumAges / 3;
//   return aveAge;
// };

// const getName = (...park) => {
//   let [green, oak, national] = park;
//   let parkArr, parkName;
//   parkArr = [green, oak, national];

//   parkArr.forEach((park) => {
//     if (park.treeNum >= 1000) {
//       parkName = park.name;
//     }
//   });
//   return parkName;
// };

// const getTotalLen = (...street) => {
//   let [str4, sunset, ocean, moore] = street;
//   let strArr, totalLen;

//   strArr = [str4, sunset, ocean, moore];
//   totalLen = 0;

//   strArr.forEach((str) => (totalLen += str.strLength));
//   return totalLen;
// };

// const sortStr = (str) => {
//   if (str.strLength >= 0.5) {
//     return 'is a normal street';
//   } else if (str.strLength >= 1) {
//     return 'is a big street';
//   } else if (str.strLength < 0.5) {
//     return 'is a small street';
//   } else {
//     return 'is a normal street';
//   }
// };

// const displayReportPark = function (a, b, c) {
//   console.log(`               --------PARK REPORT---------

//   Our 3 parks have an average age of ${getAveAge(a, b, c)}years
//   -------------------------------------------------------------
//   ${a.name} has a tree density of ${a.treeDensity} trees/sq.km
//   -------------------------------------------------------------
//   ${b.name} has a tree density of ${b.treeDensity} trees/sq.km
//   -------------------------------------------------------------
//   ${c.name} has a tree density of ${c.treeDensity} trees/sq.km
//   -------------------------------------------------------------
//   ${getName(a, b, c)} has more than 1000 trees
//   `);
// };

// const displayReportStreet = function (a, b, c, d) {
//   console.log(`               --------STREET REPORT---------

//   Our 4 streets have an total length of ${getTotalLen(a, b, c, d)}km and an average of ${Math.round(getTotalLen(a, b, c, d)) / 4}km
//   -------------------------------------------------------------
//   ${a.name}, built in ${a.buildYear} ${sortStr(a)}
//   -------------------------------------------------------------
//   ${b.name}, built in ${b.buildYear} ${sortStr(b)}
//   -------------------------------------------------------------
//   ${c.name}, built in ${c.buildYear} ${sortStr(c)}
//   -------------------------------------------------------------
//   ${d.name}, built in ${d.buildYear} ${sortStr(d)}
//   -------------------------------------------------------------
//   `);
// };

// displayReportPark(green, oak, national);
// displayReportStreet(str4, sunset, ocean, moore);

// /////////////////////////////////
// // CODING CHALLENGE

// Suppose that you're working in a small town administration, and you're in charge of two town elements:
// 1. Parks
// 2. Streets

// It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

// At an end-of-year meeting, your boss wants a final report with the following:
// 1. Tree density of each park in the town (forumla: number of trees/park area)
// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
// 3. The name of the park that has more than 1000 trees
// 4. Total and average length of the town's streets
// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

// All the report data should be printed to the console.

// HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

// class Element {
//     constructor(name, buildYear) {
//         this.name = name;
//         this.buildYear = buildYear;
//     }
// }

// class Park extends Element {
//     constructor(name, buildYear, area, numTrees) {
//         super(name, buildYear);
//         this.area = area; //km2
//         this.numTrees = numTrees;
//     }

//     treeDensity() {
//         const density = this.numTrees / this.area;
//         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
//     }
// }

// class Street extends Element {
//     constructor(name, buildYear, length, size = 3) {
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }

//     classifyStreet() {
//         const classification = new Map();
//         classification.set(1, 'tiny');
//         classification.set(2, 'small');
//         classification.set(3, 'normal');
//         classification.set(4, 'big');
//         classification.set(5, 'huge');
//         console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
//     }
// }

// const allParks = [new Park('Green Park', 1987, 0.2, 215),
//     new Park('National Park', 1894, 2.9, 3541),
//     new Park('Oak Park', 1953, 0.4, 949)
// ];

// const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
//     new Street('Evergreen Street', 2008, 2.7, 2),
//     new Street('4th Street', 2015, 0.8),
//     new Street('Sunset Boulevard', 1982, 2.5, 5)
// ];

// function calc(arr) {

//     const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

//     return [sum, sum / arr.length];

// }

// function reportParks(p) {

//     console.log('-----PARKS REPORT-----');

//     // Density
//     p.forEach(el => el.treeDensity());

//     // Average age
//     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//     const [totalAge, avgAge] = calc(ages);
//     console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

//     // Which park has more than 1000 trees
//     const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//     console.log(`${p[i].name} has more than 1000 trees.`);

// }

// function reportStreets(s) {

//     console.log('-----STREETS REPORT-----');

//     //Total and average length of the town's streets
//     const [totalLength, avgLength] = calc(s.map(el => el.length));
//     console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

//     // CLassify sizes
//     s.forEach(el => el.classifyStreet());
// }

// reportParks(allParks);
// reportStreets(allStreets);
// */

// let c = [3, 4, 5, 1, 3, 5, 2, 3, 3, 0, 1]; //0,4,7,8

// function findOdd(arr) {
//   let carr = [];
//   for (let el of arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (el === arr[i] && carr.indexOf(i) === -1) {
//         carr.push(i);
//       }

//       if (arr.lastIndexOf(el) === carr.length - 1) {
//         break;
//       }
//     }
//   }

//   return carr;
// }
// console.log(findOdd(c));

// // function findOdd(arr) {
//   let carr = [];

//   let nArr = arr.filter((c) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (c === arr[i]) {
//         carr.push();
//       }
//     }
//   });
//   return carr;
// }
// console.log(findOdd(c));

/************************************************************************
 ASYNCRONOUS JAVASCRIPT
 **********************************************************************/
//CALL BACK HELL
//  setTimeout(() => {
//    const recipeID=[234,567,432,809];
//    console.log(recipeID);

//    setTimeout(id => {
//         const recipe={title: 'Amala ati gbegiri', author: 'Olamide', year:2008};
//         console.log(`${id}: ${recipe.title}`);

//        setTimeout((id) => {
//           const recipe2={title: 'Iyan ati efo riro', author: 'Olamide', year:2020};
//           console.log(`${id}: ${recipe2.title}`);
//         }, 1500, recipeID[3]);

//    }, 1500, recipeID[2]);

//  }, 1500);

//PROMISES
// const getID = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([234, 567, 432, 809]);
//   }, 1500);
// });

// const getRecipe = (recID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = { title: 'Amala ati gbegiri', author: 'Olamide', year: 2008 };
//         resolve(`${ID}: ${recipe.title}`);
//         //reject('Error');
//       },
//       1500,
//       recID
//     );
//   });
// };

// const getRelated = (pub) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (publisher) => {
//         const recipe = { title: 'Iyan ati efo riro', publisher: 'Ola' };
//         resolve(`${pub}: ${recipe.title}`);
//       },
//       1500,
//       pub
//     );
//   });
// };

// getID
//   .then((ID) => {
//     console.log(ID);
//     return getRecipe(ID[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//     return getRelated('Olamide');
//   })
//   .then((recipe2) => console.log(recipe2))
//   .catch((ID) => {
//     console.log(ID);
//   });

//ASYNC/AWAIT

// async function getRecipeAw() {
//   const IDs = await getID;
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[1]);
//   console.log(recipe);
//   const related = await getRelated('Olams');
//   console.log(related);

//   return recipe;
// }

// //getRecipeAw();
// getRecipeAw().then((idr) => console.log(idr));

//AJAX(Asynchronous JS XML)

// function getWeather(woeid) {
//   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {
//       const today = data.consolidated_weather[0];
//       console.log(`The temperature in ${data.title} is between ${today.min_temp}C and ${today.max_temp}C`);
//     })
//     .catch((data) => console.log('Error'));
// }

// getWeather(1393672);

// AJAX ASYNC/AWAIT

// async function getWeatherAw(woeid) {
//   try {
//     const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
//     const data = await result.json();
//     const today = data.consolidated_weather[0];
//     console.log(`The temperature in ${data.title} is between ${today.min_temp}C and ${today.max_temp}C`);
//   } catch (error) {
//     alert(error);
//   }
// }

// getWeatherAw(1393672);

//CODEWARS

function printerError(s) {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

  let newS = s.split('').map((s) => (alpha.includes(s) ? 0 : 1));

  return `${newS.reduce((x, y) => x + y, 0)}/${s.length}`;
}

function printerErrors(s) {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
  return `${s.split('').filter((el) => !alpha.includes(el)).length}/${s.length}`;
}

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

function accum(s) {
  let sArr = s
    .toLowerCase()
    .split('')
    .map((el, i) => el.repeat(i + 1));

  return sArr.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1)).join('-');
}
