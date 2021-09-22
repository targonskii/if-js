import { getData } from './modules/get_data.js';
import { clickAdults, clickChildBtn, clickRoom, hideChildren, showChildren, focusPeople } from './modules/filter.js';
import { search } from './modules/search_form.js';
import { sortBubbles } from './modules/sort_bubbles.js';
import { showAvailable } from './modules/available_hotels.js';

const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
const apiPopHotels = `${apiBaseUrl}hotels/popular`;

const minus = document.querySelector('.header__people_count button.minus');
const plus = document.querySelector('.header__people_count button.plus');
const minusChild = document.querySelector('.header__people_children button.minus');
const plusChild = document.querySelector('.header__people_children button.plus');
const minusRoom = document.querySelector('.header__people_rooms button.minus');
const plusRoom = document.querySelector('.header__people_rooms button.plus');
const searchForm = document.querySelector('.js-header-form');
const peopleInput = document.querySelector('.header__people');
const formSubmit = document.querySelector('.header__form_submit');

const body = document.querySelector('body');
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

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);
minusChild.addEventListener('click', hideChildren);
minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', showChildren);
plusChild.addEventListener('click', clickChildBtn);
plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);
searchForm.addEventListener('submit', search);
peopleInput.addEventListener('click', focusPeople);
formSubmit.addEventListener('click', showAvailable);
