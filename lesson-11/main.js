const peopleInput = document.querySelector('.header__people');
const adultsInput = document.querySelector('.header__input_adults');
const childrenInput = document.querySelector('.header__input_children');
const roomsInput = document.querySelector('.header__input_rooms');
const peopleFilter = document.querySelector('.header__people_filter');

const focusPeople = (e) => {
  if (e.target === adultsInput || e.target === childrenInput || e.target === roomsInput) {
    peopleFilter.style.display = 'block';
  } else {
    peopleFilter.style.display = 'none';
  }
};
peopleInput.addEventListener('click', focusPeople);

const plusChild = document.querySelector('.header__people_children button.plus');
const minusChild = document.querySelector('.header__people_children button.minus');
const childrenFilter = document.querySelector('.header__people_age');

const showChildren = (e) => {
  childrenFilter.style.display = 'block';

  if (e.target.parentElement.querySelector('input').value >= 1 && e.target.parentElement.querySelector('input').value <= 9) {
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
  }
};
plusChild.addEventListener('click', showChildren);

const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('input').value < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.header__people_age select');
    select.remove();
  }
};
minusChild.addEventListener('click', hideChildren);

const minus = document.querySelector('.header__people_count button.minus');
const plus = document.querySelector('.header__people_count button.plus');
const minusRoom = document.querySelector('.header__people_rooms button.minus');
const plusRoom = document.querySelector('.header__people_rooms button.plus');

const clickAdults = (e) => {
  if (e.target.classList.contains('plus')) {
    ++e.target.parentElement.querySelector('.header__people_adults input').value;
  } else if (e.target.classList.contains('minus')) {
    --e.target.parentElement.querySelector('.header__people_adults input').value;
  }
  if (e.target.parentElement.querySelector('.header__people_adults input').value <= 0) {
    e.target.parentElement.querySelector('.header__people_adults input').value = 0;
    minus.style.border = '1px solid #CECECE';
    minus.style.color = '#CECECE';
  } else {
    minus.style.border = '1px solid #3077c6';
    minus.style.color = '#3077c6';
  }
  if (e.target.parentElement.querySelector('.header__people_adults input').value >= 30) {
    e.target.parentElement.querySelector('.header__people_adults input').value = 30;
    plus.style.border = '1px solid #CECECE';
    plus.style.color = '#CECECE';
  } else {
    plus.style.border = '1px solid #3077c6';
    plus.style.color = '#3077c6';
  }
  adultsInput.setAttribute('placeholder', `${e.target.parentElement.querySelector(('.header__people_adults input')).value}` + ' Adults     — ');
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);

const clickChildBtn = (e) => {
  if (e.target.classList.contains('plus')) {
    ++e.target.parentElement.querySelector('.header__people_children input').value;
  } else if (e.target.classList.contains('minus')) {
    --e.target.parentElement.querySelector('.header__people_children input').value;
  }
  if (e.target.parentElement.querySelector('.header__people_children input').value <= 0) {
    e.target.parentElement.querySelector('.header__people_children input').value = 0;
    minusChild.style.border = '1px solid #CECECE';
    minusChild.style.color = '#CECECE';
  } else {
    minusChild.style.border = '1px solid #3077c6';
    minusChild.style.color = '#3077c6';
  }
  if (e.target.parentElement.querySelector('.header__people_children input').value >= 10) {
    e.target.parentElement.querySelector('.header__people_children input').value = 10;
    plusChild.style.border = '1px solid #CECECE';
    plusChild.style.color = '#CECECE';
  } else {
    plusChild.style.border = '1px solid #3077c6';
    plusChild.style.color = '#3077c6';
  }
  childrenInput.setAttribute('placeholder', `${e.target.parentElement.querySelector('.header__people_children input').value}` + ' Children   — ');
};

minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', clickChildBtn);

const clickRoom = (e) => {
  if (e.target.classList.contains('plus')) {
    ++e.target.parentElement.querySelector('.header__people_rooms input').value;
  } else if (e.target.classList.contains('minus')) {
    --e.target.parentElement.querySelector('.header__people_rooms input').value;
  }
  if (e.target.parentElement.querySelector('.header__people_rooms input').value <= 1) {
    e.target.parentElement.querySelector('.header__people_rooms input').value = 1;
    minusRoom.style.border = '1px solid #CECECE';
    minusRoom.style.color = '#CECECE';
  } else {
    minusRoom.style.border = '1px solid #3077c6';
    minusRoom.style.color = '#3077c6';
  }
  if (e.target.parentElement.querySelector('.header__people_rooms input').value >= 30) {
    e.target.parentElement.querySelector('.header__people_rooms input').value = 30;
    plusRoom.style.border = '1px solid #CECECE';
    plusRoom.style.color = '#CECECE';
  } else {
    plusRoom.style.border = '1px solid #3077c6';
    plusRoom.style.color = '#3077c6';
  }
  roomsInput.setAttribute('placeholder', `${e.target.parentElement.querySelector('.header__people_rooms input').value}` + ' Room');
};

plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);
