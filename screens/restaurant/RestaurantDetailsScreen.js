import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {mapBoxAccessToken} from './../../config/apiKey';
import {useSelector} from 'react-redux';
import Colors from './../../constants/Colors';
const RestaurantDetailsScreen = props => {
    
    const {resID} = props.route.params;
    const restaurants = useSelector(state => state.restaurant.nearbyRestaurants);
    const selectedRestaurant = restaurants.find(res => {
        if(res.restaurant.id === resID){
            return true;
        }
    });                 
    const mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-r("+selectedRestaurant.restaurant.location.longitude+","+selectedRestaurant.restaurant.location.latitude+")/"+selectedRestaurant.restaurant.location.longitude+","+selectedRestaurant.restaurant.location.latitude+",14,0,5/250x300?access_token="+mapBoxAccessToken;
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.resName}>{selectedRestaurant.restaurant.name}</Text>
            {selectedRestaurant.restaurant.featured_image !="" ? <View style={styles.imageWrapper}><Image source={{uri: selectedRestaurant.restaurant.featured_image}} style={styles.image}/></View>: <View></View>}
            <View style={styles.textContainer}>
            <Text style={styles.text}>Ratting: <Text style={styles.rattingText}>{selectedRestaurant.restaurant.user_rating.aggregate_rating} {selectedRestaurant.restaurant.user_rating.rating_text}</Text></Text>
            <Text style={styles.text}>Cuisines: <Text style={styles.cuisines}>{selectedRestaurant.restaurant.cuisines}</Text></Text>
            <Text style={styles.text}>Average Cost For Two: <Text  style={styles.cost}>{selectedRestaurant.restaurant.average_cost_for_two} {selectedRestaurant.restaurant.currency}</Text></Text>
            <Text style={styles.text}>Address: <Text style={styles.address}>{selectedRestaurant.restaurant.location.address}</Text></Text>
            </View>
            <View style={styles.mapWrapper}>
                <Image source={{uri: mapUrl}} style={styles.map}/>
            </View>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    textContainer:{
        marginBottom: 10
    },
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
        fontWeight: 'normal',
    },
    imageWrapper:{
        width: '100%',
        height: 200,
        marginBottom: 20
    },
    container: {
        backgroundColor: Colors.cultured,
        width: '100%',
        padding: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
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
    mapWrapper:{
        width: '100%',
        height: 250,
        justifyContent:'space-around',
        marginRight: 20,
        overflow: 'hidden'
    },
    map:{
        width: '100%',
        height: '100%',
        flex: 1
    }
});
export default RestaurantDetailsScreen;