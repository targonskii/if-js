import { getData } from './get_data.js';

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

export const showAvailable = () => {
  sectionAvailable.style.display = 'block';
};
document.querySelector('.header__form_submit').addEventListener('click', showAvailable);

export async function availableHotels(urlStr) {
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
