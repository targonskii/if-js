const peopleInput = document.querySelector('.header__people');
const peopleFilter = document.querySelector('.header__people_filter');

export const focusPeople = () => {
  peopleFilter.classList.toggle('visible_filter');
};
peopleInput.addEventListener('click', focusPeople);