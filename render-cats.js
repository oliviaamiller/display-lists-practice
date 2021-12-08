export function renderCats(catsData) {
    const catDiv = document.createElement('div');
    const catNameEl = document.createElement('p');
    const catImgEl = document.createElement('img');
    const catAgeEl = document.createElement('p');
    const catColorEl = document.createElement('p');
    
        
    const favoriteToyDiv = document.createElement('div');
    const favoriteToyTypeEl = document.createElement('p');
    const favoriteToyHasCatNipEl = document.createElement('p');
    
    catDiv.classList.add('cats');
    favoriteToyDiv.classList.add('favorite-toy');
    catNameEl.classList.add('cats-name');
    
    catNameEl.textContent = catsData.name;
    catImgEl.src = catsData.img;
    catAgeEl.textContent = `age: ${catsData.age}`;
    catColorEl.textContent = catsData.color;
    favoriteToyTypeEl.textContent = `favorite toy: ${catsData.favoriteToy.type}`;
    favoriteToyHasCatNipEl.textContent = `does favorite toy have cat nip? ${catsData.favoriteToy.hasCatNip}`;
    
    favoriteToyDiv.append(favoriteToyTypeEl, favoriteToyHasCatNipEl);
    
    catDiv.append(catNameEl, catImgEl, catAgeEl, catColorEl, favoriteToyDiv);
    
    return catDiv;
    
}