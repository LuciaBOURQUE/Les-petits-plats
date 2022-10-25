/*1er VERSION - Méthode boucle native (FOR) */
function eventMainSearch () {

}

let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    const start = performance.now()

    const arrayInputRecipe = [];
    let researchMonitor = document.getElementById('search').value;

    for (let i = 0; i<recipes.length; i++){
        let doublon = false;

        let names = recipes[i].name;
        if (names.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
            arrayInputRecipe.push(recipes[i]);
            doublon = true;
        }

        let ingredients = recipes[i].ingredients;
        for (let i = 0; i<ingredients.length; i++) {
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
            if (ustensilsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) ) {
                arrayInputRecipe.push(recipes[i]);
                doublon = true;
            }
        }

    };
    displayCardRecipe(arrayInputRecipe);

    
    const end = performance.now()
    console.log(`Resultat ${end - start} milliseconds`);
});

BtnMainSearch.addEventListener('keydown', (e) => {
    if (e.key === "Enter"){
        eventMainSearch()
    }
});


/*
let BtnMainSearch = document.querySelector('.btn-search');
BtnMainSearch.addEventListener('click', () => {
    console.time(doSomething);

    function doSomething () {
        const arrayInputRecipe = [];
        let researchMonitor = document.getElementById('search').value;
    
        for (let i = 0; i<recipes.length; i++){
            let doublon = false;
    
            let names = recipes[i].name;
            if (names.toLowerCase().includes(researchMonitor.toLowerCase()) && doublon == false ) {
                arrayInputRecipe.push(recipes[i]);
                doublon = true;
            }
    
            let ingredients = recipes[i].ingredients;
            for (let i = 0; i<ingredients.length; i++) {
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
                if (ustensilsTabList.toLowerCase().includes(researchMonitor.toLowerCase()) ) {
                    arrayInputRecipe.push(recipes[i]);
                    doublon = true;
                }
            }
    
        };
        displayCardRecipe(arrayInputRecipe);
    }
    doSomething();

    console.timeEnd(doSomething);
});*/
