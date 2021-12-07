export function renderRecipes(recipeData) {

    const recipeDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    
    recipeDiv.classList.add('recipes');

    titleEl.textContent = recipeData.title;
    ratingEl.textContent = recipeData.rating;

    recipeDiv.append(titleEl, ratingEl);

    for (let ingredient of recipeData.ingredients) {
        const ingredientsEl = document.createElement('p');

        ingredientsEl.classList.add('ingredients');

        ingredientsEl.textContent = ingredient;

        recipeDiv.append(ingredientsEl);
    }   
    
    return recipeDiv;

}