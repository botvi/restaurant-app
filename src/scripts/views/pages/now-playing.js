import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowPlaying = {
    async render() {
        return `
            <div id="restaurant-list" class="restaurant-list">
                <!-- Restaurants will be rendered here -->
            </div>
        `;
    },

    async afterRender() {
        try {
            const restaurants = await TheRestaurantDbSource.getListOfRestaurants();
            const restaurantListContainer = document.getElementById('restaurant-list');

            if (restaurants) {
                restaurants.forEach((restaurant) => {
                    const restaurantItemHTML = createRestaurantItemTemplate(restaurant);
                    restaurantListContainer.insertAdjacentHTML('beforeend', restaurantItemHTML);
                });
            } else {
                console.error('Data Restaurant tidak tersedia');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat mengambil data:', error);
        }
    },
};

export default NowPlaying;
