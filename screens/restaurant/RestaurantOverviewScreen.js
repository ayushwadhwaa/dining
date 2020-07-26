import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const RestaurantOverviewScreen = props => {
    return(
        <View style={styles.container}>
            <Text>RestaurantOverviewScreen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline'
    }
});
export default RestaurantOverviewScreen;