/* VERSION RETENUE - Méthode boucle native (FOR) */
function eventMainSearch() {
    const arrayInputRecipe = [];
    let researchMonitor = document.getElementById('search').value;

    if(researchMonitor.length < 3 || researchMonitor.length == ""){
        document.querySelector(".error-message-letter").style.display = "block";
        document.querySelector(".error-message-recipe").style.display = "";
        displayCardRecipe(recipes);
        return false;
    } else {
        document.querySelector(".error-message-letter").style.display = "none";

        for (let i = 0; i<recipes.length; i++){
            let doublon = false;

            let description = recipes[i].description;
            if (description.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipes[i]);
                doublon = true;
            }
    
            let names = recipes[i].name;
            if (names.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipes[i]);
                doublon = true;
            }
    
            let ingredients = recipes[i].ingredients;
            for(let i = 0; i<ingredients.length; i++) {
                let ingredientsTabList = ingredients[i].ingredient;
                if (ingredientsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false) {
                    arrayInputRecipe.push(recipes[i]);
                    doublon = true;
                }
            }
    
            let appliances = recipes[i].appliance;
            if (appliances.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipes[i]);
                doublon = true;
            }
    
            let ustensils = recipes[i].ustensils;
            for (let i = 0; i<ustensils.length; i++) {
                let ustensilsTabList = ustensils[i];
                if (ustensilsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
                    arrayInputRecipe.push(recipes[i]);
                    doublon = true;
                }
            }
    
        };
        displayCardRecipe(arrayInputRecipe);
        return true;
    }
}

let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    eventMainSearch();
});

BtnMainSearch.addEventListener('keydown', (e) => {
    if (e.key === "Enter"){
        eventMainSearch();
    }
});