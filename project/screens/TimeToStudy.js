import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'

export default class TimeToStudy extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        return (
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Time To Study</Text>
                </View>
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() => navigation.navigate('OverviewScreen')}
                    underlayColor='fff'>

                    <Text style={styles.getStartedButtonText}>Home</Text>
                </TouchableOpacity>
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
