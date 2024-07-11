// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.querySelector('.menu-button');
//     const menuItems = document.querySelector('nav ul');
//     const gallerySection = document.querySelector('.gallery');
  
//     menuButton.addEventListener('click', () => {
//       menuItems.classList.toggle('hide');
//     });
  
//     function handleResize() {
//       const screenWidth = window.innerWidth;
//       if (screenWidth > 1000) {
//         menuItems.classList.remove('hide');
//       } else {
//         menuItems.classList.add('hide');
//       }
//     }
  
//     window.addEventListener('resize', handleResize);
//     handleResize();
  
//     function viewHandler(event) {
//       if (event.target.tagName === 'IMG') {
//         const thumbnailSrc = event.target.src;
//         const altText = event.target.alt;
  
//         // Derive the full-size image source from the thumbnail source
//         const fullSizeSrc = thumbnailSrc.replace('norris-sm.jpeg', 'norris-full.jpeg');
  
//         const viewer = document.querySelector('.viewer');
//         const viewerImage = viewer.querySelector('img');
//         viewerImage.src = fullSizeSrc;
//         viewerImage.alt = altText;
//         viewer.style.display = 'grid'; // Show the viewer by setting display to grid
//       }
//     }
  
//     function closeViewer() {
//       const viewer = document.querySelector('.viewer');
//       viewer.style.display = 'none'; // Hide the viewer by setting display to none
//     }
  
//     gallerySection.addEventListener('click', viewHandler);
  
//     const closeButton = document.querySelector('.close-viewer');
//     closeButton.addEventListener('click', closeViewer);
//   });
  
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelector('nav ul');
    const gallerySection = document.querySelector('.gallery');

    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('hide');
    });

    function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1000) {
            menuItems.classList.remove('hide');
        } else {
            menuItems.classList.add('hide');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    function viewerTemplate(imageSrc, altText) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${imageSrc}" alt="${altText}">
            </div>
        `;
    }

    function viewHandler(event) {
        if (event.target.tagName === 'IMG') {
            const thumbnailSrc = event.target.src;
            const altText = event.target.alt;

            const fullSizeSrc = thumbnailSrc.replace('norris-sm.jpeg', 'norris-full.jpeg');

            const viewer = document.querySelector('.viewer');
            const viewerImage = viewer.querySelector('img');
            viewerImage.src = fullSizeSrc;
            viewerImage.alt = altText;
            viewer.style.display = 'grid'; // Show the viewer by setting display to grid
        }
    }

    function closeViewer() {
        const viewer = document.querySelector('.viewer');
        viewer.style.display = 'none'; // Hide the viewer by setting display to none
    }

    gallerySection.addEventListener('click', viewHandler);

    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
});
