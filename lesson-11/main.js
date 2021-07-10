const peopleInput = document.querySelector('.header__people input');
const peopleFilter = document.querySelector('.header__people_filter');

const focusPeople = (e) => {
    peopleFilter.style.display = 'block';
    peopleInput.setAttribute('placeholder', '0 Adults — 0 Children — 0 Room')
}
peopleInput.addEventListener('focus', focusPeople);

const childrenButtonPlus = document.querySelector('.header__people_children button.plus');
const childrenFilter = document.querySelector('.header__people_age');

const clickChildren = (e) => {
    childrenFilter.style.display = 'block';
    peopleFilter.style.height = '256px';
}
childrenButtonPlus.addEventListener('click', clickChildren);

// function countPlus() {
//     let count = 0;
//     return function() {
//       return count++; 
//     }
// };
// const counterPlus = countPlus();

// function countMinus() {
//     let count = 0;
//     return function() {
//       return count++; 
//     }
// };
// const counterMinus = countMinus();

const minus = document.querySelector('.header__people_filter button.minus');
const plus = document.querySelector('.header__people_filter button.plus');
const input = document.querySelector('.header__people_filter input');

const clickPlus = (e) => {
    // peopleInput.setAttribute('placeholder', '0 Adults — ' + `${counterPlus()}` + ' Children — 0 Room');
    input.setAttribute('value', `${counterPlus()}`);
}
plus.addEventListener('click', clickPlus);