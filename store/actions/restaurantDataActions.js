import {geoCode} from './../../http/FetchLib';
export const SET_RESTAURANTS_DATA = 'SET_RESTAURANTS_DATA';
export const fetchRestaurantsData = (lat, log) => {
    return async dispatch => {
        const resData = await geoCode(lat,log);
        dispatch({type: SET_RESTAURANTS_DATA, restaurants: resData.nearby_restaurants, title: resData.location.title, name: resData.location.city_name});    }
}