import { filterData } from './filter_data.js';

const minusRoom = document.querySelector('.header__people_rooms button.minus');
const plusRoom = document.querySelector('.header__people_rooms button.plus');
const roomsInput = document.querySelector('.header__input_rooms');

export const clickRoom = (e) => {
  const target = e.target.parentElement.querySelector('.header__people_count span');
  const numTarget = Number(target.innerHTML);

  if (e.target.classList.contains('plus')) {
    target.innerHTML = numTarget + 1;
  } else if (e.target.classList.contains('minus')) {
    target.innerHTML = numTarget - 1;
  }
  if (target.innerHTML <= filterData.rooms.min) {
    target.innerHTML = filterData.rooms.min;
    minusRoom.style.border = '1px solid #CECECE';
    minusRoom.style.color = '#CECECE';
  } else {
    minusRoom.style.border = '1px solid #3077c6';
    minusRoom.style.color = '#3077c6';
  }
  if (target.innerHTML >= filterData.rooms.max) {
    target.innerHTML = filterData.rooms.max;
    plusRoom.style.border = '1px solid #CECECE';
    plusRoom.style.color = '#CECECE';
  } else {
    plusRoom.style.border = '1px solid #3077c6';
    plusRoom.style.color = '#3077c6';
  }
  roomsInput.textContent = `${target.innerHTML} Room`;
};

plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);