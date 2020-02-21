import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';

export default class TimeToStudy extends Component {

    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Time To Study</Text>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    backgroundImage: {
        justifyContent: 'center',
        height: 1000,
        width: null,
        alignContent: 'center',
    }
});
