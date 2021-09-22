const childrenFilter = document.querySelector('.header__people_age');
const plusChild = document.querySelector('.header__people_children button.plus');

export const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetSpan = e.target.parentElement.querySelector('span');
  if (targetSpan.innerHTML >= 1 && targetSpan.innerHTML <= 9) {
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
  }
};
plusChild.addEventListener('click', showChildren);