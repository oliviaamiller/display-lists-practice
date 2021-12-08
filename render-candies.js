export function renderCandies(candyData) {
    const p = document.createElement('p');

    p.textContent = candyData;
    p.classList.add('candies');

    return p;
}