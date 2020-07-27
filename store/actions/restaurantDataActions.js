export const SET_RESTAURANTS_DATA = 'SET_RESTAURANTS_DATA';
export const setRestaurantsData = (nearbyRestaurants, locationTitle, cityName) => {
    return {type: SET_RESTAURANTS_DATA, restaurants: nearbyRestaurants, title: locationTitle, name:cityName}
}