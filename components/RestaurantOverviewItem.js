import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const RestaurantOverviewItem = props => {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.image}} style={styles.image}/>
            <View style={styles.textWrapper}>
                <Text style={styles.restaurantName}>{props.name}</Text>
                <Text>Rating: {props.ratting} {props.rattingText}</Text>
                <Text>{props.cuisines}</Text>
                <Text>{props.locality}</Text>
                <Text>Average Cost For Two: <Text style={styles.cost}>{props.averageCost} {props.currency}</Text></Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.30,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    image:{
        width: '95%',
        height: '50%'
    },
    textWrapper:{
        width:'100%',
        paddingHorizontal: 20
    },
    restaurantName:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    cost:{
        fontWeight:'bold'
    }
});
export default RestaurantOverviewItem;