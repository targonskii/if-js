const peopleInput = document.querySelector('.header__people');
const adultsInput = document.querySelector('.header__input_adults');
const childrenInput = document.querySelector('.header__input_children');
const roomsInput = document.querySelector('.header__input_rooms');
const peopleFilter = document.querySelector('.header__people_filter');

const focusPeople = () => {
  peopleFilter.classList.toggle('visible_filter');
};
peopleInput.addEventListener('click', focusPeople);

const plusChild = document.querySelector('.header__people_children button.plus');
const minusChild = document.querySelector('.header__people_children button.minus');
const childrenFilter = document.querySelector('.header__people_age');

const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetInput = e.target.parentElement.querySelector('input');
  if (targetInput.value >= 1 && targetInput.value <= 9) {
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
  const targetAdultsInput = e.target.parentElement.querySelector('.header__people_adults input');
  if (e.target.classList.contains('plus')) {
    ++targetAdultsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetAdultsInput.value;
  }
  if (targetAdultsInput.value <= 0) {
    targetAdultsInput.value = 0;
    minus.style.border = '1px solid #CECECE';
    minus.style.color = '#CECECE';
  } else {
    minus.style.border = '1px solid #3077c6';
    minus.style.color = '#3077c6';
  }
  if (targetAdultsInput.value >= 30) {
    targetAdultsInput.value = 30;
    plus.style.border = '1px solid #CECECE';
    plus.style.color = '#CECECE';
  } else {
    plus.style.border = '1px solid #3077c6';
    plus.style.color = '#3077c6';
  }
  adultsInput.setAttribute('placeholder', `${targetAdultsInput.value}` + ' Adults     — ');
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);

const clickChildBtn = (e) => {
  const targetChildrenInput = e.target.parentElement.querySelector('.header__people_children input');
  if (e.target.classList.contains('plus')) {
    ++targetChildrenInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetChildrenInput.value;
  }
  if (targetChildrenInput.value <= 0) {
    targetChildrenInput.value = 0;
    minusChild.style.border = '1px solid #CECECE';
    minusChild.style.color = '#CECECE';
  } else {
    minusChild.style.border = '1px solid #3077c6';
    minusChild.style.color = '#3077c6';
  }
  if (targetChildrenInput.value >= 10) {
    targetChildrenInput.value = 10;
    plusChild.style.border = '1px solid #CECECE';
    plusChild.style.color = '#CECECE';
  } else {
    plusChild.style.border = '1px solid #3077c6';
    plusChild.style.color = '#3077c6';
  }
  childrenInput.setAttribute('placeholder', `${targetChildrenInput.value}` + ' Children   — ');
};

minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', clickChildBtn);

const clickRoom = (e) => {
  const targetRoomsInput = e.target.parentElement.querySelector('.header__people_rooms input');
  if (e.target.classList.contains('plus')) {
    ++targetRoomsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetRoomsInput.value;
  }
  if (targetRoomsInput.value <= 1) {
    targetRoomsInput.value = 1;
    minusRoom.style.border = '1px solid #CECECE';
    minusRoom.style.color = '#CECECE';
  } else {
    minusRoom.style.border = '1px solid #3077c6';
    minusRoom.style.color = '#3077c6';
  }
  if (targetRoomsInput.value >= 30) {
    targetRoomsInput.value = 30;
    plusRoom.style.border = '1px solid #CECECE';
    plusRoom.style.color = '#CECECE';
  } else {
    plusRoom.style.border = '1px solid #3077c6';
    plusRoom.style.color = '#3077c6';
  }
  roomsInput.setAttribute('placeholder', `${targetRoomsInput.value}` + ' Room');
};

plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);

async function getData(url) {
  let hotels = await fetch(url + `?search=${search.value}&adults=${adults.value}&children=${adults.value}&rooms=${adults.value}`)
    .then(response => response.json())
    .then(hotels => hotels)
    .catch(err => console.log(err))
  return hotels;
}

async function availableHotels() {
  let data = await getData('https://fe-student-api.herokuapp.com/api/hotels');
  data.slice(0, 4).forEach((item) => {
    const div = document.createElement('div');
    availableSliderDiv.prepend(div);
  
    const a = document.createElement('a');
    a.setAttribute('src', '#');
    div.prepend(a);
  
    const img = document.createElement('img');
    img.setAttribute('src', `${item.imageUrl}`, 'alt', `${item.name}`);
    a.prepend(img);
  
    const pAvailable = document.createElement('p');
    pAvailable.innerHTML = `${item.name}`;
    a.append(pAvailable);
  
    const pAvCityCountry = document.createElement('p');
    pAvCityCountry.innerHTML = `${item.city}` + ', ' + `${item.country}`;
    pAvailable.after(pAvCityCountry);
  });
}

availableHotels();

const body = document.querySelector('body');

const sectionAvailable = document.createElement('section');
sectionAvailable.classList.add('available');
body.append(sectionAvailable);

const availableH1 = document.createElement('h1');
const nodeAvH1 = document.createTextNode('Available hotels');
availableH1.prepend(nodeAvH1);
sectionAvailable.prepend(availableH1);
availableH1.classList.add('available__h1');

const availableSliderDiv = document.createElement('div');
availableSliderDiv.classList.add('available__slider');
availableH1.after(availableSliderDiv);

const searchForm = document.querySelector('.header__form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // const searchInput = document.querySelector('[name="search"]');
  // const adultsInput = document.querySelector('[name="adults"]');
  // const childrenInput = document.querySelector('.header__input_children');
  // const roomsInput = document.querySelector('#rooms');
  // const ageSelect = document.getElementById('age');

// console.log(searchInput);
// console.log(adultsInput);
// console.log(searchInput.value);
// console.log(roomsInput.value);
  // const values = {
  //   hotel: search.value,
  //   adults: adults.value,
  //   children: children.value,
  //   age: age.value,
  //   room: rooms.value
  // };


  // const formData = new FormData(searchForm);
  // console.log(formData.entries());
  // const values = Object.fromEntries(formData.entries());
  // console.log(document.getElementById('rooms').innerHTML);

  // console.log(values);
  // formData.get('search');
  // console.log(formData.get('search'));
  // formData.get('adults');
  // console.log(formData.get('adults'));
  // formData.get('children');
  // formData.get('rooms');
})
