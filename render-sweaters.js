export function renderSweaters(sweaterData) {
    const sweaterDiv = document.createElement('div');
    const fiberEl = document.createElement('p');
    const styleEl = document.createElement('p');
    const timesWornEl = document.createElement('p');

    sweaterDiv.classList.add('sweaters');

    sweaterDiv.textContent = 'sweater info:';
    fiberEl.textContent = `fiber: ${sweaterData.fiber}`;
    styleEl.textContent = `style: ${sweaterData.style}`;
    timesWornEl.textContent = `times worn: ${sweaterData.timesWorn}`;

    sweaterDiv.append(fiberEl, styleEl, timesWornEl);

    return sweaterDiv;
}