document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");
  const imageGallery = document.getElementById('image-gallery');
  console.log("Image gallery element:", imageGallery);
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const imageGallery = document.getElementById('image-gallery');
      data.forEach(item => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        imageGallery.appendChild(imageCard);
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
