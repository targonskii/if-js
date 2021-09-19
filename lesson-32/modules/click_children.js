import { filterData } from './filter_data.js';
import { showChildren } from './show_children.js';
import { hideChildren } from './hide_children.js';


const minusChild = document.querySelector('.header__people_children button.minus');
const plusChild = document.querySelector('.header__people_children button.plus');
const childrenInput = document.querySelector('.header__input_children');

export const clickChildBtn = (e) => {
  const target = e.target.parentElement.querySelector('.header__people_count span');
  const numTarget = Number(target.innerHTML);

  if (e.target.classList.contains('plus')) {
    target.innerHTML = numTarget + 1;
  } else if (e.target.classList.contains('minus')) {
    target.innerHTML = numTarget - 1;
  }
  if (target.innerHTML <= filterData.children.min) {
    target.innerHTML = filterData.children.min;
    minusChild.style.border = '1px solid #CECECE';
    minusChild.style.color = '#CECECE';
  } else {
    minusChild.style.border = '1px solid #3077c6';
    minusChild.style.color = '#3077c6';
  }
  if (target.innerHTML >= filterData.children.max) {
    target.innerHTML = filterData.children.max;
    plusChild.style.border = '1px solid #CECECE';
    plusChild.style.color = '#CECECE';
  } else {
    plusChild.style.border = '1px solid #3077c6';
    plusChild.style.color = '#3077c6';
  }
  childrenInput.textContent = `${target.innerHTML} Children — `;
};

minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', clickChildBtn);