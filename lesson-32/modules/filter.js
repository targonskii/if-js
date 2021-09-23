const filterData = {
  adults: {
    min: 1,
    max: 30,
    default: 2,
  },
  children: {
    min: 0,
    max: 10,
    default: 0,
  },
  rooms: {
    min: 1,
    max: 30,
    default: 1,
  },
};

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

const childrenFilter = document.querySelector('.header__people_age');
export const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('span').innerHTML < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.header__people_age select');
    select.remove();
  }
};

export const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetSpan = e.target.parentElement.querySelector('span');
  if (targetSpan.innerHTML >= 1 && targetSpan.innerHTML <= 9) {
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
  }
};

const peopleFilter = document.querySelector('.header__people_filter');

export const focusPeople = () => {
  peopleFilter.classList.toggle('visible_filter');
};
