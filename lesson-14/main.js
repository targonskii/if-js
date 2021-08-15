const formEl = document.getElementById('formEl');

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchOpt = {
    method: 'POST',
    body: new FormData(formEl),
  };

  const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOpt)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(result => result)
    .catch(error => console.log(error.message));
  console.log(res);
});
