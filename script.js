// const p = document.querySelector('p');

// p.textContent = 'This is a new text';

// alert('Waiting for user response');

// p.textContent = 'New Text';

// console.log(p);

// setTimeout(function () {
//   p.textContent = 'This is running in background';
// }, 5000);

// p.style.color = 'red';
// https://restcountries.eu/rest/v2/name/{name}

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/nepal');
request.send();

// JSON.parse(this.responseText));

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);

  console.log(data.name);

  const html = `<article class='country'>
    <img class='country__img' src='${data.flag}' />
    <div class='country__data'>
      <h3 class='country__name'>${data.name}</h3>
      <h4 class='country__region'>${data.region}</h4>
      <p class='country__row'>
        <span>👫</span>${(+data.population / 1000000).toFixed(1)}
      </p>
      <p class='country__row'>
        <span>🗣️</span>${data.languages}
      </p>
      <p class='country__row'>
        <span>💰</span>${data.currencies[0].name}
      </p>
    </div>
  </article>`;
});
