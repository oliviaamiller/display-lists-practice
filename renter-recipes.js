export function renderRecipes(recipeData) {

    const recipeDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const ingredientHeader = document.createElement('p');
    
    recipeDiv.classList.add('recipes');

    titleEl.textContent = recipeData.title;
    ratingEl.textContent = recipeData.rating;
    ingredientHeader.textContent = 'ingredients:';

    recipeDiv.append(titleEl, ratingEl, ingredientHeader);

    for (let ingredient of recipeData.ingredients) {
        const ingredientsEl = document.createElement('p');

        ingredientsEl.classList.add('ingredients');

        ingredientsEl.textContent = ingredient;

        recipeDiv.append(ingredientsEl);
    }   
    
    return recipeDiv;

}