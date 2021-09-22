import { filterData } from './filter_data.js';

const minus = document.querySelector('.header__people_count button.minus');
const plus = document.querySelector('.header__people_count button.plus');
const adultsInput = document.querySelector('.header__input_adults');

export const clickAdults = (e) => {
  const target = e.target.parentElement.querySelector('.header__people_count span');
  const numTarget = Number(target.innerHTML);

  if (e.target.classList.contains('plus')) {
    target.innerHTML = numTarget + 1;
  } else if (e.target.classList.contains('minus')) {
    target.innerHTML = numTarget - 1;
  }
  if (target.innerHTML <= filterData.adults.min) {
    target.innerHTML = filterData.adults.min;
    minus.style.border = '1px solid #CECECE';
    minus.style.color = '#CECECE';
  } else {
    minus.style.border = '1px solid #3077c6';
    minus.style.color = '#3077c6';
  }
  if (target.innerHTML >= filterData.adults.max) {
    target.innerHTML = filterData.adults.max;
    plus.style.border = '1px solid #CECECE';
    plus.style.color = '#CECECE';
  } else {
    plus.style.border = '1px solid #3077c6';
    plus.style.color = '#3077c6';
  }
  adultsInput.textContent = `${target.innerHTML} Adults — `;
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);