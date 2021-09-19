export async function getData(url) {
  const hotels = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((hotels) => hotels)
    .catch((err) => console.log(err.message));
  return hotels;
}
