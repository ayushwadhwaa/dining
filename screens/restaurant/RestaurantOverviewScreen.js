import React, {useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {geoCode} from './../../http/FetchLib';
const RestaurantOverviewScreen = props => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const getData = async () => {
        const data = await geoCode();
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
                <Text>RestaurantOverviewScreen</Text>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default RestaurantOverviewScreen;