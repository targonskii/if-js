import { showAvailable, availableHotels } from './available_hotels.js';

const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
const apiHotelsUrl = `${apiBaseUrl}hotels`;

const searchForm = document.querySelector('.js-header-form');
const spanAdults = document.querySelector('.header__people_count span.adults');
const spanRooms = document.querySelector('.header__people_count span.rooms');

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

export const search = (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  formData.set('adults', spanAdults.innerHTML);
  formData.set('rooms', spanRooms.innerHTML);
  const queryParams = Array.from(formData.entries());
  const urlStr = addParamsToUrl(apiHotelsUrl, queryParams);

  availableHotels(urlStr);
};
searchForm.addEventListener('submit', search);