import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';
import {geoCode} from './../../http/FetchLib';
import {setRestaurantsData} from './../../store/actions/restaurantDataActions';
import {useDispatch, useSelector} from 'react-redux';
import Colors from './../../constants/Colors';
const RestaurantOverviewScreen = props => {
    const dispatch = useDispatch();
    const [isDataFetched, setIsDataFetched] = useState(false); 
    const name = useSelector(state => state.restaurant.cityName);
    const title = useSelector(state => state.restaurant.locationTitle);
    const getData = async () => {
        const data = await geoCode();
        dispatch(setRestaurantsData(data.nearby_restaurants, data.location.title, data.location.city_name));
        setIsDataFetched(true);
    } 
    getData();
    if(!isDataFetched){
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='red'/>
            </View>
        );
    }else{
        return(
            <View style={styles.container}>
                <View style={styles.locationWapper}>
                    <Text style={styles.locationText}>{title}, {name}</Text>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.textStyles}>Popular Restaurants Near You</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.cultured
    },
    locationWapper:{
        borderBottomColor: 'black',
        borderRadius: 10,
        backgroundColor: Colors.opal,
        height: 40,
        margin :10,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    locationText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    textWrapper:{
        margin: 5,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    textStyles:{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.richBlack
    }
});
export default RestaurantOverviewScreen;