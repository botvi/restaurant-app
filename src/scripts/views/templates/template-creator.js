import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<center><h1>Detail Restaurant</h1></center>
<div class="restaurant-detail">
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <div class="restaurant-info">
    <img class="restaurant-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
    <div class="info">
      <p><strong>City:</strong> ${restaurant.city}</p>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Categories:</strong> ${restaurant.categories.map(category => category.name).join(', ')}</p>
      <p><strong>Rating:</strong>⭐ ${restaurant.rating}</p>
    </div>
  </div>
  <div class="restaurant-description"> 
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant-menus">
    <h3>Menus</h3>
    <div class="menu-section">
      <h4>Foods</h4>
      <ul>
        ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="menu-section">
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="customer-reviews">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map(review => `
      <div class="review">
        <p><strong>${review.name}</strong> ${review.review}</p>
        <p>${review.date}</p>
      </div>
    `).join('')}
  </div>
</div>
`;


const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="card">
  <div class="card_content">
    <div class="image-container">
    <img class="card_image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />

      <div class="city-overlay">${restaurant.city}</div>
    </div>
    <h4 class="card_rate">⭐ ${restaurant.rating}</h4>
    <h2 class="card_title">${restaurant.name}</h2>
    <p class="card_description">${restaurant.description}</p>
    <div class="restaurant-item__content">
    <a href="/#/detail/${restaurant.id}" class="button-detail">Detail</a> 
    </div>
  </div>
</div>
</div>
`;


const createRestaurantLikeTemplate = (restaurant) => `
<center><h1>Favorit Restaurant</h1></center>
<div class="restaurant-item">
<div class="card">
    <div class="card_content">
      <div class="image-container">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" width="200" height="auto" crossorigin="anonymous" />
      </div>
      <h4 class="card_rate">⭐ ${restaurant.rating}</h4>
      <h2 class="card_title">${restaurant.name}</h2>
      <div class="restaurant-item__content">
      <a href="/#/detail/${restaurant.id}" class="button-detail">Detail</a> 
      </div>
    </div>
  </div>
</div>

`;


const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate, createRestaurantLikeTemplate
};





