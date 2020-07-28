import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantOverviewScreen from './../screens/restaurant/RestaurantOverviewScreen';
import RestaurantDetailsScreen from './../screens/restaurant/RestaurantDetailsScreen';
const Stack = createStackNavigator();
const HomeStackNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RestaurantOverviewScreen" component={RestaurantOverviewScreen} />
            <Stack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsScreen} />
        </Stack.Navigator>
    );
}
export default HomeStackNavigator;