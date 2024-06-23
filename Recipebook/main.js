import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = e.target.querySelector('input').value;
        const result = recipes.find(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
        if (result) {
            displayRecipe(result);
        } else {
            alert('Recipe not found');
        }
    });
});

function displayRecipe(recipe) {
    const recipeSection = document.getElementById('recipe');
    recipeSection.querySelector('img').src = recipe.image;
    recipeSection.querySelector('h2').textContent = recipe.name;
    recipeSection.querySelector('.tag').textContent = recipe.tag;
    recipeSection.querySelector('.rating').setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    const stars = recipeSection.querySelectorAll('.icon-star, .icon-star-empty');
    stars.forEach((star, index) => {
        if (index < recipe.rating) {
            star.className = 'icon-star';
        } else {
            star.className = 'icon-star-empty';
        }
    });
    recipeSection.querySelector('p').textContent = recipe.description;
}


export const recipes = [
    {
        name: 'Apple Crisp',
        image: 'images/apple-crisp.jpg',
        tag: 'dessert',
        rating: 4,
        description: 'This apple crisp recipe is a simple yet delicious fall dessert that\'s great served warm with vanilla ice cream.'
    },
    // Add more recipes as needed
];
