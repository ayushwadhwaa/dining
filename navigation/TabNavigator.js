import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import AboutScreen from '../screens/AboutScreen';
const Tab = createBottomTabNavigator();
const TabNavigator = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
            <Tab.Screen name="AboutScreen" component={AboutScreen} />
        </Tab.Navigator>
    );
}
export default TabNavigator;