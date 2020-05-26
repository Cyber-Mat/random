/********************************************************
OBJECTS AND FUNCTIONS
********************************************************/

/* Function constructor  */

/*let mat = {
    //Object literal
    name: 'Matthew',
    sex: 'Male',
    job: 'Student',
    isMarried: false,
};

function Biodata(name, sex, job, isMarried, yearOfBirth, year) {
    this.name = name;
    this.sex = sex;
    this.job = job;
    this.isMarried = isMarried;
    this.yearOfBirth = yearOfBirth;
    this.year = year;
}
// Inheritance
Biodata.prototype.calculateAge = function () {
    return this.year - this.yearOfBirth;
}

Biodata.prototype.tribe = 'Yoruba';

let bola = new Biodata('Bola', 'Female', 'Student', true, 1994, 2020);
let tolu = new Biodata('Tolu', 'Female', 'Doctor', true, 1969, 2020);
let jide = new Biodata('Jide', 'Male', 'Tailor', true, 1970, 2020);

console.log(bola.calculateAge());
console.log(tolu.calculateAge());
console.log(jide.calculateAge());
console.log(bola.tribe)
console.log(tolu.tribe)
console.log(jide.tribe)*/





/* Object.create */

/*let biodata = {
    calculateAge: function () {
        return this.year - this.yearOfBirth;
    }
}

let bola = Object.create(biodata);
bola.name = 'Bola';
bola.yearOfBirth = 1972;
bola.year = 2020;

let tolu = Object.create(biodata, {
    name: {
        value: 'Tolu'
    },
    yearOfBirth: {
        value: 1991
    },
    sex: {
        value: 'female'
    }
})

console.log(tolu);*/





/**************************************************
 FUNCTIONS
***************************************************/
// Call back functions
let smiths = [1966, 1971, 1996, 1998, 2002];
let johnsons = [1927, 2008, 1991, 2011, 2015]

calcAge = (x) => {
    let res = [];
    for (let i = 0; i < x.length; i++) {
        res.push(2020 - x[i]);
    };
    return res;
}

function calculateAge(x) {
    return 2020 - x
}

function getAverage(x) {
    let res = 0;
    for (let i = 0; i < x.length; i++) {
        res += 2020 - x[i]
    }
    return res / x.length
}

isFullAge = (x) => {
    let res = [];
    for (let i = 0; i < x.length; i++) {
        if (2020 - x[i] > 18) {
            res[i] = x[i] + ': ' + calculateAge(x[i]) + ', Enjoy your drink';
        } else {
            res[i] = x[i] + ': ' + calculateAge(x[i]) + ', Wait a few more years :)';
        };
        console.log(res[i]);
    };
}

function getAge(arr, fxn) {
    return (fxn(arr));
}

let ages = getAge(smiths, calcAge);
console.log(ages);
let aveAges = getAge(smiths, getAverage);
console.log(aveAges);
let fullAge = getAge(johnsons, isFullAge);
console.log(fullAge);