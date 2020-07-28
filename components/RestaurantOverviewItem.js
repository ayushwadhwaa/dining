import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from './../constants/Colors';
const RestaurantOverviewItem = props => {
    const onPressHandler = ()=> {
        props.onPress(props.id);
    }
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.container}>
                {props.image !="" ? <Image source={{uri: props.image}} style={styles.image}/> : <View style={styles.fallBack}><Text>Image unavailable</Text></View>}
                <View style={styles.textWrapper}>
                    <Text style={styles.restaurantName}>{props.name}</Text>
                    <Text style={styles.ratting}>Rating: {props.ratting} {props.rattingText}</Text>
                    <Text style={styles.cuisines}>{props.cuisines}</Text>
                    <Text>{props.locality}</Text>
                    <Text>Average Cost For Two: <Text style={styles.cost}>{props.averageCost} {props.currency}</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
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
        fontWeight: 'bold',
        color: Colors.spaceCarder
    },
    cost:{
        fontWeight:'bold'
    },
    fallBack:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%'
    },
    ratting:{
        color: Colors.popstar
    },
    cuisines:{
        color: Colors.greenMunsell
    }
});
export default RestaurantOverviewItem;