import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PermissionsScreen from './../screens/PermissionsScreen';
const Stack = createStackNavigator();
const AppNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;