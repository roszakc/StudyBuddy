import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends Component {

  render(){
    const navigation = this.props.navigation;
    return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
          <View style={styles.titleCircle}>
            <Text style={styles.titleText}>Study Buddy</Text>
          </View>

          <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate('OverviewScreen')}
              underlayColor='fff'>

            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  backgroundImage: {
    justifyContent: 'center',
    height: 1000,
    width: null,
    alignContent: 'center',
  },
  titleCircle: {
    flex: .15,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -640,
    backgroundColor: '#47C494',
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
  titleText: {
    color: '#E0F5F6',
    position: 'absolute',
    top: '40%',
    width: '100%',
    textAlign: 'center',
    margin: 0,
    fontSize: 50,
    fontFamily: 'rock-salt',
  },
  getStartedButton: {
    marginRight:80,
    marginLeft:80,
    marginTop: 240,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#47C494',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  getStartedButtonText: {
    color:'#E0F5F6',
    textAlign:'center',
    fontSize: 20,
  },
});
