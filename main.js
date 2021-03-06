// Lesson 2

// Task 1

let user = 'John Doe';
console.log(user);
const student = 'Aleksandr';
console.log(student);
user = student; // Aleksandr
console.log(user);

// Task 2

let test = 1;
test += 1;
test += '1'; // 21
console.log(test);
test -= 1; // 20
console.log(test);
test = Boolean(test); // true
console.log(test);

// Task 3

const arr = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

// Task 4

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
let value;
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    value = arr2[i];
    console.log(value);
  }
}

// Task 5

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
let cell;
for (i = 0; i < arr3.length; i++) {
  if (!(arr3[i] % 2)) {
    cell = arr3[i];
    console.log(cell);
  }
}

// Lesson 3

// Task 1

// const palindrome = (string) => {
//     string = string.toLowerCase(); // all letters to lowercase
//     return string === string.split('').reverse().join('');
// }
// console.log(palindrome('Левел'));

// Task 2

const min = (a, b) => {
  if (a < b) {
    return a;
  } if (a > b) {
    return b;
  }
  return 'The values are equal';
};
console.log(min(-15, 15));
console.log(min(15, 15));

const max = (a, b) => {
  if (a < b) {
    return b;
  } if (a > b) {
    return a;
  }
  return 'The values are equal';
};
console.log(max(-25, 25));
console.log(max(25, 25));

const min2 = (a, b) => (a > b ? b : a);
console.log(min2(17, -14));

const max2 = (a, b) => (a > b ? a : b);
console.log(max2(233, 184));

// Task 3

const arr0 = [12, 13, 20, 18, 70, 100, 43, 57, 50, 18];
const replaceZero = () => {
  for (i = 0; i < arr0.length; i++) {
    const strArr = `${arr0[i]}`;
    if (strArr.indexOf('0') !== -1) {
      arr0[i] = strArr.replaceAll('0', 'zero');
    }
  }
};
replaceZero(arr0);

console.log(arr0);

// Lesson 4

// Task 1

function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));

// Task 2

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const prg = document.querySelectorAll('p');
const callback = () => {
  let colNum = 0;
  return function (e) {
    e.target.style.backgroundColor = colors[colNum];
    colNum++;
    if (colNum === colors.length) {
      colNum = 0;
    }
  };
};
for (let i = 0; i < prg.length; i++) {
  prg[i].addEventListener('click', callback());
}

// Lesson 5

// Task 1

// date = 'YYYY-MM-DD';

const changeDate = (date) => {
  const DD = date.slice(8, 10);
  const MM = date.slice(5, 7);
  const YYYY = date.slice(0, 4);
  const newDate = `${DD}.${MM}.${YYYY}`;
  if ((MM > 0) && (MM < 13) && (DD > 0) && (DD < 32)) {
    return newDate;
  }
  return 'Date invalid';
};

console.log(changeDate('2020-12-23'));
console.log(changeDate('2020-13-23'));

// Task 2

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const searchPlace = (search) => {
  const arrPlace = [];
  for (let i = 0; i < data.length; i++) {
    const str = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
    if (str.includes(search)) {
      arrPlace.push(str);
    }
  }
  return arrPlace;
};
console.log(searchPlace('Rotterdam'));
console.log(searchPlace('Slowakia'));
console.log(searchPlace('Hostel Friendship'));

// Lesson 6

// Task 1

const palindrome = (string) => string === string.split('').reverse().join('');
console.log(palindrome('левел'));
console.log(palindrome('леве'));

// Task 2

const hotels2 = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const searchPlace2 = (searchStr) => {
  const arrPlace2 = [];
  hotels2.forEach((item) => {
    const str2 = `${item.name}, ${item.city}, ${item.country}`;
    if (str2.includes(searchStr)) {
      arrPlace2.push(str2);
    }
  });
  return arrPlace2;
};
console.log(searchPlace2('Spain'));
console.log(searchPlace2('Ukraine'));
console.log(searchPlace2('Hostel'));
console.log(searchPlace2('Edinburgh'));

// Task 3

const hotels3 = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const sortCity = (arr4) => {
  const ctr = new Object();
  for (const key in arr4) {
    if (ctr[`${arr4[key].country}`] === undefined) {
      ctr[`${arr4[key].country}`] = new Array();
      ctr[`${arr4[key].country}`].push(`${arr4[key].city}`);
    } else {
      ctr[`${arr4[key].country}`].push(`${arr4[key].city}`);
    }
  }
  return ctr;
};
console.log(sortCity(hotels3));

// Lesson 7

// Task

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const objs = typeof object1 === 'object' && typeof object2 === 'object';
  const notNull = object1 !== null && object2 !== null;

  if (objs && notNull) {
    for (const key in object1) {
      if (!object2.hasOwnProperty(key)) {
        return false;
      }
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        const result1 = deepEqual(object1[key], object2[key]);
        if (!result1) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

// Lesson 8

// Task

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(param) {
    this.firstName = param.firstName;
    this.lastName = param.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(param) {
    super(param);
    this.admissionYear = param.admissionYear;
    this.courseName = param.courseName;
  }

  get course() {
    return (new Date()).getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  getInfo() {
    return this.studentsData.sort((oneStudent, twoStudent) => new Student(oneStudent).course - new Student(twoStudent).course).map((currentValue) => `${new User(currentValue).fullName} - ${new Student(currentValue).courseName}, ${new Student(currentValue).course} курс`);
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
