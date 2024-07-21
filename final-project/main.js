// Function to modify DOM elements
function updateIntroText() {
    const intro = document.getElementById('intro');
    if (intro) {
        intro.innerHTML += '<p>Soft drinks have evolved tremendously since their inception...</p>';
    }
}

// Function to handle navigation click events
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            alert(`Navigating to ${event.target.innerText}`);
        });
    });
}

// Example of conditional branching
function checkScreenWidth() {
    if (window.innerWidth > 768) {
        console.log('Wide screen');
    } else {
        console.log('Narrow screen');
    }
}

// Use of an object
const sodaInfo = {
    name: 'Coca-Cola',
    year: 1886,
    origin: 'USA'
};

console.log(`The famous ${sodaInfo.name} was created in ${sodaInfo.year} in the ${sodaInfo.origin}.`);

// Use of array methods
const sodas = ['Coca-Cola', 'Pepsi', 'Sprite', 'Fanta'];
const sodaList = sodas.map(soda => `<li>${soda}</li>`).join('');
const historySection = document.getElementById('history');
if (historySection) {
    historySection.innerHTML += `<ul>${sodaList}</ul>`;
}

// Function to add modern sodas content dynamically
function addModernSodasContent() {
    const modernSodas = [
        { name: 'Coca-Cola Zero', year: 2005 },
        { name: 'Pepsi Max', year: 1993 },
        { name: 'Mountain Dew', year: 1940 },
        { name: 'Sprite', year: 1961 }
    ];
    
    const modernSodaList = modernSodas.map(soda => `<li>${soda.name} - Introduced in ${soda.year}</li>`).join('');
    const modernSodasSection = document.getElementById('modern-sodas');
    
    if (modernSodasSection) {
        modernSodasSection.innerHTML += `<ul>${modernSodaList}</ul>`;
    }
}

// Initialize functions
if (document.getElementById('intro')) updateIntroText();
setupNavigation();
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

// Check if on modern sodas page and add content
if (window.location.pathname.includes('modern.html')) {
    addModernSodasContent();
}
