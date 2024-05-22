import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantLikeTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div id="restaurant-favorite" class="restaurant-favorite">
                <!-- Restoran akan dirender di sini -->
            </div>
        `;
    },

    async afterRender() {
        try {
            const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
            const restaurantContainerFavorite = document.querySelector('#restaurant-favorite');

            if (restaurants && restaurants.length > 0) {
                restaurantContainerFavorite.innerHTML = restaurants.map(restaurant => createRestaurantLikeTemplate(restaurant)).join('');
            } else {
                restaurantContainerFavorite.innerHTML = '<p>Tidak ada restoran favorit.</p>';
            }
        } catch (error) {
            console.error('Error rendering favorite restaurants:', error);
            // Handle error, show error message, etc.
        }
    },
};

export default Favorite;
