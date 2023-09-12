// FACTORY FUNCTION

/**
 * Allows to create and display a recipe card
 * @param {Object} data the data is the recipe informations
 * @param {number} data.id recipe's data
 * @param {string} data.image recipe's data
 * @param {string} data.name recipe's name
 * @param {Array<{ingredient: String, quantity: Number, unit: String}>} data.ingredients recipe's ingredients
 * @param {number} data.time recipe's time
 * @param {string} data.description recipe's description
 * @param {string} data.appliance recipe's appliance
 * @returns display of the card recipe with data
 */
function factoryCardRecipe (data) {
    const { id, image, name, time, description } = data
    const picture = `assets/pictures/${image}`

    // Create a card recipe to the DOM
    function getCardRecipeDOM() {
        const card = document.createElement('article');
        card.classList.add('cards-recipe');
        card.setAttribute('id', `${id}`);
        card.setAttribute('aria-label', `Recette de ${name}`);
        card.setAttribute('tabindex', '0');
    
        let cardHTML = ` 
                        <img class="cards-recipe__img" src="${picture}" alt="${name}">
                        
                        <div class="cards-recipe__infos">
                            <div class="recipe-title-time">
                                <h2 class="title-recipe">${name}</h2>
                                <div class="time-recipe">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                                    </svg>
                                    <h2>${time} min</h2>
                                </div>
                            </div>
                            
                            <div class="recipe-ingredients-text">
                            <div class="ingredients-tab-item">`
        
        data.ingredients.forEach(ingredient => {
            let ingredientName = `${ingredient.ingredient}`;
            let quantityName = `${ingredient.quantity}`;
            quantityName === `${undefined}` ? "" : cardHTML += `<p class="ingredient"><span class="ingredient-bold">${ingredientName} :</span> ${quantityName}</p>`
        });

        cardHTML += `      </div>  
                                <p class="recipe-text">${description}</p>
                            </div>
                        </div> `
        card.innerHTML= cardHTML

        return (card);
    }

    return {
        id,
        picture,
        getCardRecipeDOM
    }
}