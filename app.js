// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandies } from './render-candies.js';
import { sweaters } from './sweaters-data.js';
import { renderSweaters } from './render-sweaters.js';
import { cats } from './cats-data.js';

const candiesEl = document.querySelector('#candies-list');
const sweatersEl = document.querySelector('#sweaters-list');const catsEl = document.querySelector('#cats-list');


for (let candy of candies) {
    const candyEl = renderCandies(candy);

    candiesEl.append(candyEl);
}

for (let sweater of sweaters) {
    const sweaterEl = renderSweaters(sweater);

    sweatersEl.append(sweaterEl);
}

for (let cat of cats) {
    const catDiv = document.createElement('div');
    const catNameEl = document.createElement('p');
    const catAgeEl = document.createElement('p');
    const catColorEl = document.createElement('p');
    
    const favoriteToyDiv = document.createElement('div');
    const favoriteToyTypeEl = document.createElement('p');
    const favoriteToyHasCatNipEl = document.createElement('p');

    catDiv.classList.add('cats');
    favoriteToyDiv.classList.add('favorite-toy');

    catNameEl.textContent = cat.name;
    catAgeEl.textContent = cat.age;
    catColorEl.textContent = cat.color;
    favoriteToyTypeEl.textContent = cat.favoriteToy.type;
    favoriteToyHasCatNipEl.textContent = cat.favoriteToy.hasCatNip;

    favoriteToyDiv.append(favoriteToyTypeEl, favoriteToyHasCatNipEl);

    catDiv.append(catNameEl, catAgeEl, catColorEl, favoriteToyDiv);

    catsEl.append(catDiv);

}