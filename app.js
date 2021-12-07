// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandies } from './render-candies.js';

const candiesEl = document.querySelector('#candies-list');


for (let candy of candies) {
    const candyEl = renderCandies(candy);

    candiesEl.append(candyEl);
}
