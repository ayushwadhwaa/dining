import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {useDispatch} from 'react-redux';
import {setLocation} from './../store/actions/locationActions';
import { StackActions } from '@react-navigation/native';
const PermissionsScreen = props => {
    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch();
    const verifyPermission = async () => {
        const alreadyGranted = await Permissions.getAsync(Permissions.LOCATION);
        if(alreadyGranted.status !== 'granted'){
            const res = await Permissions.askAsync(Permissions.LOCATION);
            if(res.staus !== 'granted'){
                return false;
            }
        }
        return true;
    }
    const onNextHandler = async () => {
        const hasPermission =await verifyPermission();
        if(!hasPermission){
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant Location Permission to use this application.',
                [{text:'okay'}]
            );
        }else{
            setIsFetching(true);
            try{
                const userLocation = await Location.getCurrentPositionAsync({timeout: 5000});
                dispatch(setLocation(userLocation.coords.latitude, userLocation.coords.longitude));
                props.navigation.dispatch(
                    StackActions.replace('TabNavigator')
                );
            }catch(err){
                Alert.alert(
                    'Error!',
                    'Could not find location. Please try again later.',
                    [{text:'okay'}]
                );
            }
            setIsFetching(false);
        }
    }
    if(isFetching){
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='red'/>
            </View>
        );
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Hi, nice to meet you!</Text>
                    <View style={styles.textWrapper}>
                        <Text style={styles.textStyle}>Set your location to start exploring restaurants around you.</Text>
                        <Text style={styles.textStyle}>We only access your location while you are using the app to improve your experience.</Text>
                    </View>
                <Button title="Next" onPress={onNextHandler}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 16
    },
    textWrapper: {
        padding: 10,
        margin: 10
    }
});
export default PermissionsScreen;