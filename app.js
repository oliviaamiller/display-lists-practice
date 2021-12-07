// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandies } from './render-candies.js';
import { sweaters } from './sweaters-data.js';
import { renderSweaters } from './render-sweaters.js';

const candiesEl = document.querySelector('#candies-list');
const sweatersEl = document.querySelector('#sweaters-list');


for (let candy of candies) {
    const candyEl = renderCandies(candy);

    candiesEl.append(candyEl);
}

for (let sweater of sweaters) {
    const sweaterEl = renderSweaters(sweater);

    sweatersEl.append(sweaterEl);
}