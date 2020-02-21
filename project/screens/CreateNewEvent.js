
import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';


export default class CreateNewEvent extends Component {


    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Create New Event</Text>
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
