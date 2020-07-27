import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from './../../constants/Colors';
import RestaurantOverviewItem from './../../components/RestaurantOverviewItem';
const RestaurantOverviewScreen = props => {
    return(
        <View style={styles.container}>
            <View style={styles.locationWapper}>
                <Text style={styles.locationText}>{useSelector(state => state.restaurant.locationTitle)}, {useSelector(state => state.restaurant.cityName)}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textStyles}>Popular Restaurants Near You</Text>
            </View>
            <FlatList
                style={styles.list}
                data={useSelector(state=> state.restaurant.nearbyRestaurants)}
                keyExtractor={item => item.restaurant.id}
                renderItem={itemData => (
                    <RestaurantOverviewItem
                        image={itemData.item.restaurant.featured_image}
                        name={itemData.item.restaurant.name}
                        ratting={itemData.item.restaurant.user_rating.aggregate_rating}
                        rattingText={itemData.item.restaurant.user_rating.rating_text}
                        cuisines={itemData.item.restaurant.cuisines}
                        locality={itemData.item.restaurant.location.locality}
                        averageCost={itemData.item.restaurant.average_cost_for_two}
                        currency={itemData.item.restaurant.currency}
                    />
                )}
            />
        </View>
    );
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
    },
    list: {
        width: '100%',
        paddingHorizontal: 20
    }
});
export default RestaurantOverviewScreen;