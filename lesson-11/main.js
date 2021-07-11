const peopleInput = document.querySelector('.header__people');
const adultsInput = document.querySelector('.header__input_adults');
const childrenInput = document.querySelector('.header__input_children');
const roomsInput = document.querySelector('.header__input_rooms');
const peopleFilter = document.querySelector('.header__people_filter');

const focusPeople = () => {
  peopleFilter.style.display = 'block';
  adultsInput.setAttribute('placeholder', '0 Adults     — ');
  childrenInput.setAttribute('placeholder', '0 Children   — ');
  roomsInput.setAttribute('placeholder', '0 Room');
};
peopleInput.addEventListener('click', focusPeople);

const plusChild = document.querySelector('.header__people_children button.plus');
const minusChild = document.querySelector('.header__people_children button.minus');
const childrenFilter = document.querySelector('.header__people_age');

const showChildren = (e) => {
  childrenFilter.style.display = 'block';

  if (e.target.parentElement.querySelector('input').value >= 1) {
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
  if (e.target.parentElement.querySelector('.header__people_adults input').value < 0) {
    e.target.parentElement.querySelector('.header__people_adults input').value = 0;
  }
  if (e.target.parentElement.querySelector('.header__people_adults input').value > 30) {
    e.target.parentElement.querySelector('.header__people_adults input').value = 30;
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
  if (e.target.parentElement.querySelector('.header__people_children input').value < 0) {
    e.target.parentElement.querySelector('.header__people_children input').value = 0;
  }
  if (e.target.parentElement.querySelector('.header__people_children input').value > 10) {
    e.target.parentElement.querySelector('.header__people_children input').value = 10;
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
  if (e.target.parentElement.querySelector('.header__people_rooms input').value < 0) {
    e.target.parentElement.querySelector('.header__people_rooms input').value = 0;
  }
  if (e.target.parentElement.querySelector('.header__people_rooms input').value > 30) {
    e.target.parentElement.querySelector('.header__people_rooms input').value = 30;
  }
  roomsInput.setAttribute('placeholder', `${e.target.parentElement.querySelector('.header__people_rooms input').value}` + ' Room');
};

plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);
