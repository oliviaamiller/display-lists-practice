export function renderSweaters(sweaterData) {
    const sweaterDiv = document.createElement('div');
    const fiberEl = document.createElement('p');
    const styleEl = document.createElement('p');
    const timesWornEl = document.createElement('p');

    sweaterDiv.classList.add('sweaters');

    fiberEl.textContent = sweaterData.fiber;
    styleEl.textContent = sweaterData.style;
    timesWornEl.textContent = sweaterData.timesWorn;

    sweaterDiv.append(fiberEl, styleEl, timesWornEl);

    return sweaterDiv;
}