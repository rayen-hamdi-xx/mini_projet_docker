

async function fetchRestaurants() {
    try {
        const response = await fetch('https://localhost:8081/restaurants.json');
        const data = await response.json();
        alert(data); 
        const restaurantList = document.getElementById('restaurant-list');

        // Display the restaurant data
        data.forEach(restaurant => {
            const listItem = document.createElement('li');
            listItem.textContent = `${restaurant.name} - ${restaurant.cuisine} - ${restaurant.borough}`;
            restaurantList.appendChild(listItem);
        });
    } catch (error) {
        alert('Error fetching restaurant data:', error);
    }
}
