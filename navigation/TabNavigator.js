import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import {Ionicons} from '@expo/vector-icons';
import AboutStackNavigator from './AboutStackNavigator'
const Tab = createBottomTabNavigator();
const TabNavigator = props => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} options={{ title: 'Dining',tabBarIcon:()=> <Ionicons name='ios-home' size={28} color='red' /> }}/>
            <Tab.Screen name="AboutScreen" component={AboutStackNavigator} options={{ title: 'About',tabBarIcon:()=> <Ionicons name='ios-reorder' size={28} color='red' /> }}/>
        </Tab.Navigator>
    );
}
export default TabNavigator;