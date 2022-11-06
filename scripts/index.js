/* Récupération des données JS dans le fichier 'recipes.js' */

/* Fonction affichage des cartes de recettes
   avec appel de la Factory "Card Recipe" */
   function displayCardRecipe(arrayInputRecipe) {
    const cardRecipeSection = document.querySelector(".section-grid-cards");
    cardRecipeSection.innerHTML= "";

    if (arrayInputRecipe.length == 0) {
        document.querySelector(".error-message-recipe").style.display = "block";
    } else {
        arrayInputRecipe.forEach((recipe) => {
            document.querySelector(".error-message-recipe").style.display = "none";
            const cardRecipeModel = factoryCardRecipe(recipe);
            const recipeCardDOM = cardRecipeModel.getCardRecipeDOM();
            cardRecipeSection.appendChild(recipeCardDOM);
        });
    }

}
displayCardRecipe(recipes);