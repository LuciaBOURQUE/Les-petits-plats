/* Dynamique au niveau des Tags" */

// 1) Création des tags et suppression des tags
const tagsFilter = document.querySelector('.tags-filter');
const allElements = document.querySelectorAll('.blabla');
function createTheTag (element) {
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
        tag.style.background = "#3282F7";
    }
    if (element.getAttribute('categorie') == 'appareil') {
        tag.style.background = "#68D9A4";
    }
    if (element.getAttribute('categorie') == 'ustensile') {
        tag.style.background = "#ED6454";
    }

    const close = document.querySelectorAll('.close-tag');
    close.forEach((btn) =>{
        btn.addEventListener('click', (e)=> {
            element.style.display = 'block';
            e.target.closest('div').remove();
        })
    })
}

// 2) Trier les recettes on fonction des tags
const arrayInputRecipe = [];
const allRecipes = recipes;

const allIngredients = document.querySelectorAll('.tag-ingredient');
const allAppareils = document.querySelectorAll('.tag-appareil');
const allUstensils = document.querySelectorAll('.tag-ustensil');

/*
let articleRecipe = document.querySelectorAll(".cards-recipe");
articleRecipe.forEach((article) => {
    article.setAttribute("display", "yes");
    console.log(article);
})*/

allElements.forEach((element) => {
    element.addEventListener('click', (e)=> {
        createTheTag(element);
        
        allRecipes.forEach((recipe) => {
            // Les ingrédients
            let ingredients = recipe.ingredients;
            ingredients.forEach((ingredient) => {
                let ingredientsTabList = ingredient.ingredient;
                if (ingredientsTabList.toLowerCase().includes(element.innerText.toLowerCase())) {
                    //console.log(recipe);
                    arrayInputRecipe.push(recipe);
                }
            })

            // Les appareils
            let appliances = recipe.appliance;
            if (appliances.toLowerCase().includes(element.innerText.toLowerCase())) {
                arrayInputRecipe.push(recipe);
            }

            // Les ustensiles
            let ustensils = recipe.ustensils;
            ustensils.forEach((ustensil) => {
                if (ustensil.toLowerCase().includes(element.innerText.toLowerCase())) {
                    arrayInputRecipe.push(recipe);
                }
            })

        })
        displayCardRecipe(arrayInputRecipe);
        // Trouver une solution pour remove() les autres recettes lors de l'itération

        function restFilterElements () {

            // Les ingrédients
            allIngredients.forEach((testSurTest) => {
                arrayInputRecipe.forEach((recipeRest) => {
                    let ingredients = recipeRest.ingredients;
                    ingredients.forEach((testIngredient) => {
                        let test = testIngredient.ingredient;
                        if (test.toLowerCase().includes(testSurTest.innerText.toLowerCase()) ) {
                            testSurTest.setAttribute("display", "yes");
                        }
                    })
                })
                if (!testSurTest.getAttribute('display')) {
                    testSurTest.remove();
                }
            })

            // Les appareils
            allAppareils.forEach((testAppareil) => {
                arrayInputRecipe.forEach((recipeRest) => {
                    let appliances = recipeRest.appliance;
                    if (appliances.toLowerCase().includes(testAppareil.innerText.toLowerCase()) ) {
                        testAppareil.setAttribute("display", "yes");
                    }
                })
                if (!testAppareil.getAttribute('display')) {
                    testAppareil.remove();
                }
            })
            
            //Les ustensils
            allUstensils.forEach((testUstensil) => {
                arrayInputRecipe.forEach((recipeRest) => {
                    let ustensils = recipeRest.ustensils;
                    ustensils.forEach((ustensil) => {
                        if (ustensil.toLowerCase().includes(testUstensil.innerText.toLowerCase()) ) {
                            testUstensil.setAttribute("display", "yes");
                        }
                    })
                })
                if (!testUstensil.getAttribute('display')) {
                    testUstensil.remove();
                }
            })
        }
        restFilterElements()

    })
})

