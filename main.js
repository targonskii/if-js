// Lesson 2

// Task 1

let user = 'John Doe';
console.log(user);
let student = 'Aleksandr'
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

let arr = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i]; 
}
console.log(result);

// Task 4

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
let value;
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        value = arr2[i];
        console.log(value);
    }
}

// Task 5

let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
let cell;
for (i = 0; i < arr3.length; i++) {
    if (!(arr3[i] % 2)) {
        cell = arr3[i];
        console.log(cell);
    }
}

// Lesson 3

// Task 1

const palindrome = (string) => {
    string = string.toLowerCase(); // all letters to lowercase
    return string === string.split('').reverse().join(''); // split string to array, reverse array, join array to string
}
console.log(palindrome('Левел'));

// Task 2

const min = (a,b) => {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return 'The values are equal';
    }
}
console.log(min(-15,15));
console.log(min(15,15));

const max = (a,b) => {
    if (a < b) {
        return b;
    } else if (a > b) {
        return a;
    } else {
        return 'The values are equal';
    }
}
console.log(max(-25,25));
console.log(max(25,25));

const min2 = (a,b) => {
    return a > b ? b : a;
}
console.log(min2(17,-14));

const max2 = (a,b) => {
    return a > b ? a : b;
}
console.log(max2(233,184));

// Task 3

let arr0 = [12, 13, 20, 18, 70, 100, 43, 57, 50, 18];
const replaceZero = (arr0) => {
    for (i = 0; i < arr0.length; i++) {
        let strArr = '' + arr0[i];
        if (strArr.indexOf('0') !== -1) { 
            arr0[i] = strArr.replaceAll('0', 'zero'); 
        }
    }
}
replaceZero(arr0);

console.log(arr0);

// Lesson 4

// Task 1

function sum(a) {
    return function (b) {
        return a + b
    }
}
console.log(sum(5)(2));

// Task 2

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const prg = document.querySelectorAll('p');
const callback = () => {
    let colNum = 0;
    return function(e) {
        e.target.style.backgroundColor = colors[colNum];
        colNum++;
            if (colNum === colors.length) {
                colNum = 0
        }
    }
}
for(let i = 0; i < prg.length; i++) {
    prg[i].addEventListener('click', callback())
}

// Lesson 5

// Task 1

let date = 'YYYY-MM-DD'

const changeDate = (date) => {
    const DD = date.slice(8, 10);
    const MM = date.slice(5, 7);
    const YYYY = date.slice(0, 4);
    const newDate = DD + '.' + MM + '.' + YYYY;
    if ((0 < MM) && (MM < 13) && (0 < DD) && (DD < 32)) {
        return newDate;
    }
    return "Date invalid";
}

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
    search = search.toLowerCase();
    data.forEach(function(item) {
        if (item.country.toLowerCase() === search || item.city.toLowerCase() === search || item.hotel.toLowerCase() === search) {
            place = item;
        }
    });
    return place;
}
console.log(searchPlace('rotterdam'));
console.log(searchPlace('sloWaKIA'));
console.log(searchPlace('Hostel Friendship'));