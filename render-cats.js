export function renderCats(catsData) {
    const catDiv = document.createElement('div');
        const catNameEl = document.createElement('p');
        const catAgeEl = document.createElement('p');
        const catColorEl = document.createElement('p');
        
        const favoriteToyDiv = document.createElement('div');
        const favoriteToyTypeEl = document.createElement('p');
        const favoriteToyHasCatNipEl = document.createElement('p');
    
        catDiv.classList.add('cats');
        favoriteToyDiv.classList.add('favorite-toy');
    
        catNameEl.textContent = catsData.name;
        catAgeEl.textContent = catsData.age;
        catColorEl.textContent = catsData.color;
        favoriteToyTypeEl.textContent = catsData.favoriteToy.type;
        favoriteToyHasCatNipEl.textContent = catsData.favoriteToy.hasCatNip;
    
        favoriteToyDiv.append(favoriteToyTypeEl, favoriteToyHasCatNipEl);
    
        catDiv.append(catNameEl, catAgeEl, catColorEl, favoriteToyDiv);
    
        return catDiv;
    
    }
}