import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mapBoxAccessToken} from './../../config/apiKey';
import {useSelector} from 'react-redux';
const RestaurantDetailsScreen = props => {
    const {resID} = props.route.params;
    const restaurants = useSelector(state => state.restaurant.nearbyRestaurants);
    const selectedRestaurant = restaurants.find(res => {
        if(res.restaurant.id === resID){
            return true;
        }
    });
    return (
        <View style={syles.container}>
            <Text>{selectedRestaurant.restaurant.name}</Text>
        </View>
    );
}
const syles = StyleSheet.create({
    container: {
        flex:  1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:'80%',
        height: 300
    }
});
export default RestaurantDetailsScreen;