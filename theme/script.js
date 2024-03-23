document.addEventListener('DOMContentLoaded', function() {
  console.log("radi");
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const imageGallery = document.getElementById('image-gallery');
      const searchInput = document.getElementById('search');

      // Function to filter data based on search query
      function filterData(query) {
        return data.filter(item => {
          return item.title.toLowerCase().includes(query.toLowerCase());
        });
      }

      // Function to update gallery based on filtered data
      function updateGallery(filteredData) {
        imageGallery.innerHTML = ''; // Clear existing content
        filteredData.forEach(item => {
          const imageCard = document.createElement('div');
          imageCard.classList.add('image-card');
          imageCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          `;
          imageGallery.appendChild(imageCard);
        });
      }

      // Event listener for search input
      searchInput.addEventListener('input', function() {
        const query = this.value.trim(); // Get search query
        const filteredData = filterData(query); // Filter data based on query
        updateGallery(filteredData); // Update gallery with filtered data
      });

      // Initially populate gallery with all data
      updateGallery(data);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
