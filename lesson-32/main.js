import { getData } from './modules/get_data.js';
import { search } from './modules/search_form.js';
import { sortBubbles } from './modules/sort_bubbles.js';
import { clickAdults } from './modules/click_adults.js';
import { clickRoom } from './modules/click_rooms.js';
import { clickChildBtn } from './modules/click_children.js';
import { hideChildren } from './modules/hide_children.js';
import { showChildren } from './modules/show_children.js';
import { focusPeople } from './modules/focus_people.js';

const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
const apiPopHotels = `${apiBaseUrl}hotels/popular`;

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
