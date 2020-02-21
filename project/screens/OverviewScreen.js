
import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default class OverviewScreen extends Component{
    static contextType = NavigationContext;

    render() {
        const {goBack} = this.props.navigation;
        return (
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>

                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() => goBack()}
                    underlayColor='fff'>

                    <Text style={styles.getStartedButtonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() => goBack()}
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
