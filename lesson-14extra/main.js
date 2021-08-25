const div = document.querySelector('.addImg');
const p = document.querySelector('p');
const input = document.querySelector('input');

const clickDiv = () => {
  input.click();
};

div.addEventListener('click', clickDiv);

const readFile = () => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    document.querySelector('img').src = reader.result;
  };
};

input.onchange = () => {
  p.remove();
  if (document.querySelector('img') == null) {
    const img = document.createElement('img');
    div.appendChild(img);
    readFile();
  } else {
    readFile();
  }
};
