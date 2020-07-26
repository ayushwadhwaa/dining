import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const PermissionsScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hi, nice to meet you!</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.textStyle}>Set your location to start exploring restaurants around you.</Text>
                    <Text style={styles.textStyle}>We only access your location while you are using the app to improve your experience.</Text>
                </View>
            <Button title="Next"/>
        </View>
    );
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