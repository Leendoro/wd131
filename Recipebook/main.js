import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = e.target.querySelector('input').value.toLowerCase();
        const filteredRecipes = filterRecipes(query);
        if (filteredRecipes.length > 0) {
            renderRecipes(filteredRecipes);
        } else {
            alert('Recipe not found');
        }
    });
    init(); // Initialize with a random recipe
});

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe(recipes) {
    const randomIndex = random(recipes.length);
    return recipes[randomIndex];
}

function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            ${ratingTemplate(recipe.rating)}
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    return `<ul class="recipe__tags">
        ${tags.map(tag => `<li>${tag}</li>`).join('')}
    </ul>`;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('#recipe');
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const randomRecipe = getRandomRecipe(recipes);
    renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
    return recipes.filter(recipe => {
        const lowerCaseQuery = query.toLowerCase();
        return recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
    }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const query = e.target.querySelector('input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.getElementById('search-form').addEventListener('submit', searchHandler);
init();
