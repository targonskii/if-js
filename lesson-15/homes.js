const sortBubbles = (arr) => {
  for (let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i].name > arr[i + 1].name) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
};

async function getData(url) {
  let hotels = await fetch(url)
    .then(response => response.json())
    .then(hotels => hotels)
    .catch(err => console.log(err))
  return hotels;
}

async function createHotels() {
  let data = await getData('https://fe-student-api.herokuapp.com/api/hotels/popular');
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

createHotels();

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