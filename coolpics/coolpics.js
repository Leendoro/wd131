const menuButton = document.querySelector('.menu-button');

// Get the menu items
const menuItems = document.querySelector('nav ul');

// Add event listener to the menu button
menuButton.addEventListener('click', () => {
    // Toggle the 'hide' class on menu items
    menuItems.classList.toggle('hide');
});
function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
        // If screen width is greater than 1000px, remove 'hide' class from menu items
        menuItems.classList.remove('hide');
    } else {
        // Otherwise, add 'hide' class to menu items
        menuItems.classList.add('hide');
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call handleResize function immediately when page loads
window.addEventListener('load', handleResize);
// Function to create viewer template
function viewerTemplate(imageSrc, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
}

// Function to handle viewing images
function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        // Get the image source and alt text
        const imageSrc = event.target.src;
        const altText = event.target.alt;

        // Create viewer template and insert it into the body
        const viewerHTML = viewerTemplate(imageSrc, altText);
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);

        // Add event listener to close button
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

// Function to close the viewer
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

// Add event listener to the gallery section
const gallerySection = document.querySelector('.gallery');
gallerySection.addEventListener('click', viewHandler);

document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button
    const menuButton = document.querySelector('.menu-button');

    // Get the menu items
    const menuItems = document.querySelector('nav ul');

    // Add event listener to the menu button
    menuButton.addEventListener('click', () => {
        // Toggle the 'hide' class on menu items
        menuItems.classList.toggle('hide');
    });
});
