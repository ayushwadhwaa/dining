import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutHomeScreen from './../screens/about/AboutHomeScreen';
import LicenseScreen from './../screens/about/LicenseScreen';
const Stack = createStackNavigator();
const AboutStackNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutHomeScreen}  />
            <Stack.Screen name="license" component={LicenseScreen} />
        </Stack.Navigator>
    );
}
export default AboutStackNavigator;