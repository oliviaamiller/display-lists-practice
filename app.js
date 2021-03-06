// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandies } from './render-candies.js';
import { sweaters } from './sweaters-data.js';
import { renderSweaters } from './render-sweaters.js';
import { cats } from './cats-data.js';
import { renderCats } from './render-cats.js';
import { recipes } from './recipes-data.js';
import { renderRecipes } from './renter-recipes.js';

const candiesEl = document.querySelector('#candies-list');
const sweatersEl = document.querySelector('#sweaters-list');
const catsEl = document.querySelector('#cats-list');
const recipesEl = document.querySelector('#recipes-list');



for (let candy of candies) {
    const candyEl = renderCandies(candy);

    candiesEl.append(candyEl);
}

for (let sweater of sweaters) {
    const sweaterEl = renderSweaters(sweater);

    sweatersEl.append(sweaterEl);
}

for (let cat of cats) {
    const catEl = renderCats(cat);

    catsEl.append(catEl);
}

for (let recipe of recipes) {
    const recipeEl = renderRecipes(recipe);

    recipesEl.append(recipeEl);
}