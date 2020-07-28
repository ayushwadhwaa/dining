import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PermissionsScreen from './../screens/PermissionsScreen';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();
const AppNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} options={{ title: 'Dining' }} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ title: 'Dining' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;