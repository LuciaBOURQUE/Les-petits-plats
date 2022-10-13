/* Fonctionnalité de recherche : performant et rapide
   2e VERSION - Méthode Objet Array */


/* Tableau des recettes triées par l'input global */

let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    const start = performance.now()

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

    const end = performance.now()
    console.log(`Resultat ${end - start} milliseconds`);
})

/*
let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    console.time(doSomething);

    function doSomething (){   
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
    }
    doSomething();

    console.timeEnd(doSomething);
})*/