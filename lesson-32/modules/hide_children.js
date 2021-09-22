const childrenFilter = document.querySelector('.header__people_age');
const minusChild = document.querySelector('.header__people_children button.minus');
export const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('span').innerHTML < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.header__people_age select');
    select.remove();
  }
};
minusChild.addEventListener('click', hideChildren);