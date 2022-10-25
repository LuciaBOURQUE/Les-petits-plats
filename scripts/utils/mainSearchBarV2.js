/* 2e VERSION - Méthode Objet Array (FOREACH) */
function eventMainSearch() {
    const arrayInputRecipe = [];
    let researchMonitorValue = document.getElementById('search').value;

    if (researchMonitorValue.length <= 3 || researchMonitorValue.length == "" ) {
        document.querySelector(".error-message-letter").style.display = "block";
        return false;
    } else {
        document.querySelector(".error-message-letter").style.display = "none";

        recipes.forEach((recipe) => {
            let doublon = false;
        
            let names = recipe.name;    
            if (names.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipe);
                doublon = true;
            } /*else {
                document.querySelector(".error-message-recipe").style.display = "block";
            }*/
    
            let ingredients = recipe.ingredients;
            ingredients.forEach((ingredient) => {
                let ingredientsTabList = ingredient.ingredient;
                if (ingredientsTabList.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false) {
                    arrayInputRecipe.push(recipe);
                    doublon = true;
                }
            });
    
            let appliances = recipe.appliance;
            if (appliances.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipe);
                doublon = true;
            }
    
            let ustensils = recipe.ustensils;
            if (doublon == false ) {
                ustensils.forEach((ustensil) => {
                    let ustensilsTabList = ustensil;
                    if (ustensilsTabList.toLowerCase().includes(researchMonitorValue.toLowerCase()) ) {
                        arrayInputRecipe.push(recipe);
                        doublon = true;
                    }
                });
            }
        });
        displayCardRecipe(arrayInputRecipe);
        return true;
    }
}

let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    eventMainSearch();
});

BtnMainSearch.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        eventMainSearch();
    }
});








/*
let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    const start = performance.now();

    const arrayInputRecipe = [];
    let researchMonitorValue = document.getElementById('search').value;

    recipes.forEach((recipe) => {
        let doublon = false;  
        
        let names = recipe.name;    
        if (names.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false ) {
            arrayInputRecipe.push(recipe);
            doublon = true;
        }

        let ingredients = recipe.ingredients;
        ingredients.forEach((ingredient) => {
            let ingredientsTabList = ingredient.ingredient;
            if (ingredientsTabList.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false) {
                arrayInputRecipe.push(recipe);
                doublon = true;
            }
        });

        let appliances = recipe.appliance;
        if (appliances.toLowerCase().includes(researchMonitorValue.toLowerCase()) && doublon == false ) {
            arrayInputRecipe.push(recipe);
            doublon = true;
        }

        let ustensils = recipe.ustensils;
        if (doublon == false ) {
            ustensils.forEach((ustensil) => {
                let ustensilsTabList = ustensil;
                if (ustensilsTabList.toLowerCase().includes(researchMonitorValue.toLowerCase()) ) {
                    arrayInputRecipe.push(recipe);
                    doublon = true;
                }
            });
        }
    });
    displayCardRecipe(arrayInputRecipe);

    const end = performance.now();
    console.log(`Resultat ${end - start} milliseconds`); // Recherche avec "crème" : 2.300000011920929 milliseconds
});*/