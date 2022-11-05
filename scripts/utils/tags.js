/* Dynamique au niveau des Tags" */
// 1) Création des tags et suppression des tags
const tagsFilter = document.querySelector('.tags-filter');
const allElementsOnTags = document.querySelectorAll('.element');
function creatTag (element) {
    const tag = document.createElement('div');
    tag.classList.add('tags');
    let tagHTML = ` 
            <p>${element.innerText}</p>
            <svg class="close-tag" tabindex="0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
            </svg> `
    tag.innerHTML = tagHTML;
    tagsFilter.appendChild(tag);

    element.style.display = 'none';

    if (element.getAttribute('categorie') == 'ingredient') {
        tag.setAttribute('categorie', 'ingredient');
        tag.style.background = "#3282F7";

        const modalbg = document.querySelector(".ingredients-tab");
        const ingredientPlaceholder = document.getElementsByName("ingredient");
        if(modalbg.classList.contains('none')){
            modalbg.classList.remove('none');
        } else {
            modalbg.classList.add('none');
            ingredientPlaceholder[0].placeholder = "Ingrédients";
        }
    }
    if (element.getAttribute('categorie') == 'appareil') {
        tag.setAttribute('categorie', 'appareil');
        tag.style.background = "#68D9A4";

        const modalbg = document.querySelector(".appliances-tab");
        const appareilsPlaceholder = document.getElementsByName("appareils");
        if(modalbg.classList.contains('none')){
            modalbg.classList.remove('none');
        } else {
            modalbg.classList.add('none');
            appareilsPlaceholder[0].placeholder = "Appareils";
        }
    }
    if (element.getAttribute('categorie') == 'ustensile') {
        tag.setAttribute('categorie', 'ustensile');
        tag.style.background = "#ED6454";

        const modalbg = document.querySelector(".ustensils-tab");
        const ustensilsPlaceholder = document.getElementsByName("ustensiles");
        if(modalbg.classList.contains('none')){
            modalbg.classList.remove('none');
        } else {
            modalbg.classList.add('none');
            ustensilsPlaceholder[0].placeholder = "Ustensils";
        }
    }

}

// 2) Récupération des éléments nécessaire
const allIngredients = document.querySelectorAll('.tag-ingredient');
const allAppareils = document.querySelectorAll('.tag-appareil');
const allUstensils = document.querySelectorAll('.tag-ustensil');

// 3) Affichage des recettes
allElementsOnTags.forEach((element) => {
    element.addEventListener('click', ()=> {
        //document.querySelector(".error-message-letter").style.display = "none";
        let arrayInputRecipe = [];
        creatTag(element);

        // Affichage des recettes en fonction de la liste des tags cliké (+ éviter les doublons)
        function displayRecipeOnFilter () {
            document.getElementById('search').value = "";
            
            let allTags = document.querySelectorAll(".tags");
            recipes.forEach((recipe) => {
                let tagIsOnRecipe = true;
    
                allTags.forEach((tag) => {
                    if (tagIsOnRecipe == true) {
                        // Les ingrédients
                        if (tag.getAttribute('categorie') == 'ingredient') {
                            let ingredients = recipe.ingredients;
                            tagIsOnRecipe = false;
                            ingredients.forEach((ingredient) => {
                                let ingredientsTabList = ingredient.ingredient;
                                if ( ingredientsTabList.toLowerCase() == (tag.innerText.toLowerCase())) {
                                    tagIsOnRecipe = true;
                                }
                            })
                        }

                        
                        // Les appareils
                        if (tag.getAttribute('categorie') == 'appareil') {
                            let appliances = recipe.appliance;
                            if ( !tag.innerText.toLowerCase().includes(appliances.toLowerCase()) ) {
                                tagIsOnRecipe = false;
                            }
                        }
        
                        // Les ustensiles
                        if (tag.getAttribute('categorie') == 'ustensile') {
                            let ustensils = recipe.ustensils;
                            tagIsOnRecipe = false;
                            ustensils.forEach((ustensil) => {
                                if ( ustensil.toLowerCase() == (tag.innerText.toLowerCase()) ) {
                                tagIsOnRecipe = true;
                                }
                            })
                        }
                    }
                })
    
                if (tagIsOnRecipe == true) {
                    arrayInputRecipe.push(recipe);
                    console.log(recipe);
                }

            })
            displayCardRecipe(arrayInputRecipe);
        }
        displayRecipeOnFilter();


        // Filtrage des éléments dans les champs input
        function remainFilterElements () {
            // Les ingrédients
            allIngredients.forEach((ingredientOnList) => {
                ingredientOnList.style.display = "none";
                arrayInputRecipe.forEach((remainRecipes) => {
                    let ingredients = remainRecipes.ingredients;
                    ingredients.forEach((ingredient) => {
                        let tagIsOnRecipe = ingredient.ingredient;
                        if (tagIsOnRecipe.toLowerCase().includes(ingredientOnList.innerText.toLowerCase()) ) {
                            ingredientOnList.style.display = "block";
                        }
                    })

                })
            })
            
            // Les appareils
            allAppareils.forEach((applianceOnList) => {
                applianceOnList.style.display = "none";
                arrayInputRecipe.forEach((remainRecipes) => {
                    let appliances = remainRecipes.appliance;
                    if (appliances.toLowerCase().includes(applianceOnList.innerText.toLowerCase()) ) {
                        applianceOnList.style.display = "block";
                    }
                })
            })
            
            //Les ustensils
            allUstensils.forEach((ustensilOnList) => {
                ustensilOnList.style.display = "none";
                arrayInputRecipe.forEach((remainRecipes) => {
                    let ustensils = remainRecipes.ustensils;
                    ustensils.forEach((ustensil) => {
                        if (ustensil.toLowerCase().includes(ustensilOnList.innerText.toLowerCase()) ) {
                            ustensilOnList.style.display = "block";
                        }
                    })
                })
            })
            
        }
        remainFilterElements()


        // Suppression de tags > ré-actulisation des recettes
        const close = document.querySelectorAll('.close-tag');
        close.forEach((btn) =>{
            btn.addEventListener('click', (e)=> {
                element.style.display = 'block';
                e.target.closest('div').remove();

                arrayInputRecipe = [];
                displayRecipeOnFilter();
                remainFilterElements();
            })
        })

    })
})