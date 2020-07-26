import {SET_LOCATION} from './../actions/locationActions';
const initalState = {
    latitude: 0,
    longitude: 0
}
const locationReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_LOCATION:
            return {...state, latitude: action.latitude, longitude:action.longitude}
        default:
            return state;
    }
}
export default locationReducer;