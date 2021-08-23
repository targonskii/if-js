const div = document.querySelector('.addImg');
const p = document.querySelector('p');
const input = document.querySelector('input');

const clickDiv = () => {
  input.click();
  input.onchange = () => {
    p.remove();
    const img = document.createElement('img');
    div.appendChild(img);
    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      img.src = reader.result;
    };
  };
};

div.addEventListener('click', clickDiv);
