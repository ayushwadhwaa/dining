import {SET_RESTAURANTS_DATA} from './../actions/restaurantDataActions';
const initialState = {
    nearbyRestaurants: [],
    locationTitle: '',
    cityName: ''
}
const restaurantDataReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESTAURANTS_DATA:
            return {...state, nearbyRestaurants: action.restaurants, locationTitle: action.title, cityName: action.name}
        default:
            return state;
    }
}
export default restaurantDataReducer;