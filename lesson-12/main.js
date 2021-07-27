async function getData() {
  const responce = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
  const data = await responce.json();
  
  const body = document.querySelector('body');

  const sectionHomes = document.createElement('section');
  sectionHomes.classList.add('homes');
  body.prepend(sectionHomes);

  const homesH1 = document.createElement('h1');
  const nodeH1 = document.createTextNode('Homes guests loves');
  homesH1.prepend(nodeH1);
  sectionHomes.prepend(homesH1);
  homesH1.classList.add('homes__h1');

  const homesSliderDiv = document.createElement('div');
  homesSliderDiv.classList.add('homes__slider');
  homesH1.after(homesSliderDiv);

  data.slice(0, 4).forEach((item) => {
    const div = document.createElement('div');
    homesSliderDiv.prepend(div);

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
getData();
