import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
const AboutHomeScreen = props => {
    const onPressHandler = () => {
        props.navigation.navigate('license');
    }
    return(
        <View style={styles.container}>
            <Text>Developed By Ayush Wadhwa</Text>
            <Button title="LICENSE" onPress={onPressHandler}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
});
export default AboutHomeScreen;