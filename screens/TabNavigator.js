import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantOverviewScreen from './../screens/restaurant/RestaurantOverviewScreen';
import AboutScreen from './../screens/AboutScreen';
const Tab = createBottomTabNavigator();
const TabNavigator = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="RestaurantOverviewScreen" component={RestaurantOverviewScreen} />
            <Tab.Screen name="AboutScreen" component={AboutScreen} />
        </Tab.Navigator>
    );
}
export default TabNavigator;