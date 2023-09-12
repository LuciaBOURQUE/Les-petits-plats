// We retrieve the recipes.js file

/**
 * Display of recipes with call from the factoryCardRecipe's Factory
 * @param {Array} arrayInputRecipe 
 */
function displayCardRecipe(arrayInputRecipe) {
    let cardRecipeSection = document.querySelector(".section-grid-cards");
    cardRecipeSection.innerHTML= "";

    if (arrayInputRecipe.length == 0) {
        document.querySelector(".error-message-recipe").style.display = "block";
    } else {
        document.querySelector(".error-message-recipe").style.display = "none";
        arrayInputRecipe.forEach((recipe) => {
            const cardRecipeModel = factoryCardRecipe(recipe);
            const recipeCardDOM = cardRecipeModel.getCardRecipeDOM();
            cardRecipeSection.appendChild(recipeCardDOM);
        });
    }
}
displayCardRecipe(recipes);