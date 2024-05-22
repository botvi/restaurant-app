import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
    static async getListOfRestaurants() {
        try {
            const response = await fetch(API_ENDPOINT.NOW_PLAYING);
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            console.error('Error fetching list of restaurants:', error);
            return []; // Mengembalikan array kosong jika terjadi kesalahan
        }
    }


    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            return responseJson.restaurant; // Assuming the API returns a single restaurant object
        } catch (error) {
            console.error('Error fetching restaurant detail:', error);
            return null; // Return null if an error occurs
        }
    }
}

export default TheRestaurantDbSource;