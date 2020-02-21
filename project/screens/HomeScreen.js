import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'

export default class HomeScreen extends Component {

  static contextType = NavigationContext;

  render(){
    const navigation = this.context;
    return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
          <View style={styles.titleCircle}>
            <Text style={styles.titleText}>Study Buddy</Text>
          </View>
          <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate('OverviewScreen', "test")}
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

  secondButton: {
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
