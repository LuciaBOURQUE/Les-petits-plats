/* Dynamique au niveau des Dropdown Search" */

// 1) Création des tableaux pour les modales au niveau des tags
function manageElementsListOnTag (currentsRecipes) {
    //Partie 1 - Créer les tableaux à remplir
    let arrayIngredientList = document.querySelector(".ingredients-tab");
    const ingredientsTab = [];
    let arrayAppliancesList = document.querySelector(".appliances-tab");
    const appliancesTab = [];
    let arrayUstensilsList = document.querySelector(".ustensils-tab");
    const ustensilsTab = [];

    //Partie 2- Aller chercher les éléments et les intégrer dans leur tableaux respectifs
    currentsRecipes.forEach((recipe) => {    
        const ingredients = recipe.ingredients;
        ingredients.forEach((ingredient) => {
            let ingredientsTabList = ingredient.ingredient;
            ingredientsTab.push(`<li class="tag-ingredient element" categorie="ingredient">${ingredientsTabList.toLowerCase()}</li>`);
        })

        const appliances = recipe.appliance;
        appliancesTab.push(`<li class="tag-appareil element" categorie="appareil">${appliances.toLowerCase()}</li>`);

        const ustensils = recipe.ustensils;
        ustensils.forEach((ustensil) => {
            ustensilsTab.push(`<li class="tag-ustensil element" categorie="ustensile">${ustensil.toLowerCase()}</li>`);
        })
    })

    //Partie 3- Afficher le tableaux dans le HTML et gérer les élements en doublon (créer un nouveau tableau)
    let newTabIngredientsList = [... new Set(ingredientsTab)];
    arrayIngredientList.innerHTML += `<ul class="tab-tag">${newTabIngredientsList.join('')}</ul>`;
    let newTabAppliancesList = [... new Set(appliancesTab)];
    arrayAppliancesList.innerHTML += `<ul class="tab-tag">${newTabAppliancesList.join('')}</ul>`;
    let newTabUstensilsList = [... new Set(ustensilsTab)];
    arrayUstensilsList.innerHTML += `<ul class="tab-tag">${newTabUstensilsList.join('')}</ul>`;
}
manageElementsListOnTag (recipes);


// 2) Ouverture et fermeture des modales des dropdown search
const btnModalElement = document.querySelectorAll(".btn-dropdown");
btnModalElement.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains("ingredients-dropdown")) {
            const modalbg = document.querySelector(".ingredients-tab");
            const ingredientPlaceholder = document.getElementsByName("ingredient");
            ingredientPlaceholder[0].placeholder = "Rechercher un ingrédient";

            if(modalbg.classList.contains('none')){
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                ingredientPlaceholder[0].placeholder = "Ingrédients";
            }

        } else if (e.target.classList.contains("appareils-dropdown")) {
            const modalbg = document.querySelector(".appliances-tab");
            const appareilsPlaceholder = document.getElementsByName("appareils");
            appareilsPlaceholder[0].placeholder = "Rechercher un appareil";
        
            if(modalbg.classList.contains('none')){
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                appareilsPlaceholder[0].placeholder = "Appareils";
            }

        } else if (e.target.classList.contains("ustensils-dropdown")) {
            const modalbg = document.querySelector(".ustensils-tab");
            const ustensilsPlaceholder = document.getElementsByName("ustensiles");
            ustensilsPlaceholder[0].placeholder = "Rechercher un ustensil";
            if(modalbg.classList.contains('none')){
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                ustensilsPlaceholder[0].placeholder = "Ustensils";
            }
        }
    })
})


// 3) Filtrage des recettes par leur tag
// A REVOIR + faire avec la touche "ENTER" !
function FilterTagsSelection() {
    const researchIngredientTag = document.getElementById('ingredients');
    const researchAppareilsTag = document.getElementById('appareils');
    const researchUstensilesTag = document.getElementById('ustensiles');

    researchIngredientTag.addEventListener("input", filterListIngredients);
    researchAppareilsTag.addEventListener("input", filterListAppareils);
    researchUstensilesTag.addEventListener("input", filterListUstensiles);

    function filterListIngredients() {
        const valueIngredientTag = researchIngredientTag.value.toLowerCase();
        const allIngredients = document.querySelectorAll('.tag-ingredient');
        const display = document.querySelector('.ingredients-tab');
        display.classList.remove('none');

        allIngredients.forEach((ingredient) => {
            let test = ingredient.innerHTML;
            if (test.toLowerCase().includes(valueIngredientTag)) {
                ingredient.style.display = '';
            } else {
                ingredient.style.display = 'none';
            }
        })
    }

    function filterListAppareils() {
        const valueAppareilTag = researchAppareilsTag.value.toLowerCase();
        const allAppareils = document.querySelectorAll('.tag-appareil');
        const display = document.querySelector('.appliances-tab');
        display.classList.remove('none');

        allAppareils.forEach((appareil) => {
            let test = appareil.innerHTML;
            if (test.toLowerCase().includes(valueAppareilTag)) {
                appareil.style.display = '';
            } else {
                appareil.style.display = 'none';
            }
        })
    }

    function filterListUstensiles() {
        const valueUstensilTag = researchUstensilesTag.value.toLowerCase();
        const allUstensils = document.querySelectorAll('.tag-ustensil');
        const display = document.querySelector('.ustensils-tab');
        display.classList.remove('none');

        allUstensils.forEach((ustensil) => {
            let test = ustensil.innerHTML;
            if (test.toLowerCase().includes(valueUstensilTag)) {
                ustensil.style.display = '';
            } else {
                ustensil.style.display = 'none';
            }
        })
    }
}
FilterTagsSelection()