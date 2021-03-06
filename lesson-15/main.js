const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
const apiHotelsUrl = `${apiBaseUrl}hotels`;
const apiPopHotels = `${apiBaseUrl}hotels/popular`;

const peopleInput = document.querySelector('.header__people');
const adultsInput = document.querySelector('.header__input_adults');
const childrenInput = document.querySelector('.header__input_children');
const roomsInput = document.querySelector('.header__input_rooms');
const peopleFilter = document.querySelector('.header__people_filter');
const plusChild = document.querySelector('.header__people_children button.plus');
const minusChild = document.querySelector('.header__people_children button.minus');
const childrenFilter = document.querySelector('.header__people_age');
const minus = document.querySelector('.header__people_count button.minus');
const plus = document.querySelector('.header__people_count button.plus');
const minusRoom = document.querySelector('.header__people_rooms button.minus');
const plusRoom = document.querySelector('.header__people_rooms button.plus');
const spanAdults = document.querySelector('.header__people_count span.adults');
const spanRooms = document.querySelector('.header__people_count span.rooms');

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

const focusPeople = () => {
  peopleFilter.classList.toggle('visible_filter');
};
peopleInput.addEventListener('click', focusPeople);

const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetSpan = e.target.parentElement.querySelector('span');
  if (targetSpan.innerHTML >= 1 && targetSpan.innerHTML <= 9) {
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
  }
};
plusChild.addEventListener('click', showChildren);

const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('span').innerHTML < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.header__people_age select');
    select.remove();
  }
};
minusChild.addEventListener('click', hideChildren);

const clickAdults = (e) => {
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
  adultsInput.textContent = `${target.innerHTML} Adults ??? `;
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);

const clickChildBtn = (e) => {
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
  childrenInput.textContent = `${target.innerHTML} Children ??? `;
};

minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', clickChildBtn);

const clickRoom = (e) => {
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

async function getData(url) {
  const hotels = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((hotels) => hotels)
    .catch((err) => console.log(err.message));
  return hotels;
}

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

async function availableHotels(urlStr) {
  const data = await getData(urlStr);
  availableSliderDiv.innerHTML = '';
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
    pAvCityCountry.innerHTML = `${item.city}, ${item.country}`;
    pAvailable.after(pAvCityCountry);
  });
}

const searchForm = document.querySelector('.js-header-form');

const addParamsToUrl = (urlString, queryParams) => {
  const url = new URL(urlString);

  queryParams.forEach(([key, value]) => {
    const currentValue = url.searchParams.get(key);

    if (currentValue) {
      const values = currentValue.split(',');
      values.push(value);
      url.searchParams.set(key, values.join(','));
    } else {
      url.searchParams.append(key, value);
    }
  });

  return url.toString();
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(searchForm);
  formData.set('adults', spanAdults.innerHTML);
  formData.set('rooms', spanRooms.innerHTML);
  const queryParams = Array.from(formData.entries());
  const urlStr = addParamsToUrl(apiHotelsUrl, queryParams);

  availableHotels(urlStr);
});

const showAvailable = () => {
  sectionAvailable.style.display = 'block';
};
document.querySelector('.header__form_submit').addEventListener('click', showAvailable);

const sortBubbles = (arr) => {
  for (let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i].name > arr[i + 1].name) {
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
};

async function createHotels(url) {
  const data = await getData(url);
  sortBubbles(data).slice(0, 4).forEach((item) => {
    const div = document.createElement('div');
    homesSliderDiv.append(div);
  
    const a = document.createElement('a');
    a.setAttribute('src', '#');
    div.prepend(a);
  
    const img = document.createElement('img');
    img.setAttribute('src', `${item.imageUrl}`, 'alt', `${item.name}`);
    a.prepend(img);
  
    const pHotel = document.createElement('p');
    pHotel.innerHTML = `${item.name}`;
    a.append(pHotel);
  
    const pCityCountry = document.createElement('p');
    pCityCountry.innerHTML = `${item.city}` + ', ' + `${item.country}`;
    pHotel.after(pCityCountry);
  });
}

createHotels(apiPopHotels);

const sectionHomes = document.createElement('section');
sectionHomes.classList.add('homes');
body.append(sectionHomes);

const homesH1 = document.createElement('h1');
const nodeH1 = document.createTextNode('Homes guests loves');
homesH1.prepend(nodeH1);
sectionHomes.prepend(homesH1);
homesH1.classList.add('homes__h1');

const homesSliderDiv = document.createElement('div');
homesSliderDiv.classList.add('homes__slider');
homesH1.after(homesSliderDiv);
