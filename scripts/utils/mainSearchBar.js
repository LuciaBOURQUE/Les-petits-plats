/* Fonctionnalité de recherche : performant et rapide
   1er VERSION - Méthode Objet Array */


/* Tableau des recettes triées par l'input global */
let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    const arrayInputRecipe = [];
    let researchMonitor = document.getElementById('search').value;

    recipes.forEach((recipe) => {
        let doublon = false;  
        
        let names = recipe.name;    
        if (names.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
            arrayInputRecipe.push(recipe);
            doublon = true;
        }

        let ingredients = recipe.ingredients;
        ingredients.forEach((ingredient) => {
            let ingredientsTabList = ingredient.ingredient;
            if (ingredientsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false) {
                arrayInputRecipe.push(recipe);
                doublon = true;
            }
        })

        let appliances = recipe.appliance;
        if (appliances.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
            arrayInputRecipe.push(recipe);
            doublon = true;
        }

        let ustensils = recipe.ustensils;
        if (doublon == false ) {
            ustensils.forEach((ustensil) => {
                let ustensilsTabList = ustensil;
                if (ustensilsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) ) {
                    arrayInputRecipe.push(recipe);
                    doublon = true;
                }
            })
        }
    })
    displayCardRecipe(arrayInputRecipe);
})