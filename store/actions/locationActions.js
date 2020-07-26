export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = (lat, long) => {
    return {type: SET_LOCATION, latitude: lat, longitude: long}
}