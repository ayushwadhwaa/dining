import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const AboutScreen = props => {
    return(
        <View style={styles.container}>
            <Text>AboutScreen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default AboutScreen;