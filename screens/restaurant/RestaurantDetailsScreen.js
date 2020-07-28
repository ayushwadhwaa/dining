import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {mapBoxAccessToken} from './../../config/apiKey';
import {useSelector} from 'react-redux';
import Colors from './../../constants/Colors';
import { color } from 'react-native-reanimated';
const RestaurantDetailsScreen = props => {
    const {resID} = props.route.params;
    const restaurants = useSelector(state => state.restaurant.nearbyRestaurants);
    const selectedRestaurant = restaurants.find(res => {
        if(res.restaurant.id === resID){
            return true;
        }
    });
    return (
        <View style={styles.container}>
            <View style={styles.warpper}>
                <Text style={styles.resName}>{selectedRestaurant.restaurant.name}</Text>
                <View style={styles.imageWrapper}>
                    {props.image !="" ? <Image source={{uri: selectedRestaurant.restaurant.featured_image}} style={styles.image}/> : <View style={styles.fallBack}><Text>Image unavailable</Text></View>}
                </View>
                <Text style={styles.text}>Ratting: <Text style={styles.rattingText}>{selectedRestaurant.restaurant.user_rating.aggregate_rating} {selectedRestaurant.restaurant.user_rating.rating_text}</Text></Text>
                <Text style={styles.text}>Cuisines: <Text style={styles.cuisines}>{selectedRestaurant.restaurant.cuisines}</Text></Text>
                <Text style={styles.text}>Average Cost For Two: <Text  style={styles.cost}>{selectedRestaurant.restaurant.average_cost_for_two} {selectedRestaurant.restaurant.currency}</Text></Text>
                <Text style={styles.text}>Address: <Text style={styles.address}>{selectedRestaurant.restaurant.location.address}</Text></Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    rattingText:{
        color: Colors.popstar,
        fontWeight: 'normal'
    },
    cuisines:{
        color: Colors.greenMunsell,
        fontWeight: 'normal'
    },
    cost:{
        color: Colors.grey,
        fontWeight: 'normal'
    },
    address:{
        color: Colors.midninghtBlue,
        fontWeight: 'normal'
    },
    imageWrapper:{
        width: '100%',
        height: 200
    },  
    warpper:{
        backgroundColor: Colors.cultured,
        flex: 1
    },
    container: {
        flex:  1,
        width: '100%',
        padding: 20,
        margin: 10,  
    },
    resName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.spaceCarder,
        marginBottom: 10
    },
    image:{
        width: '95%',
        height: '100%'
    },
});
export default RestaurantDetailsScreen;