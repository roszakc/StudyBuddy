import * as React from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
          <View style={styles.titleCircle}>
            <Text style={styles.titleText}>Study Buddy</Text>
          </View>
          <TouchableOpacity
              style={styles.getStartedButton}
            onPress={() => Alert.alert('I pressed the button')}
            underlayColor='fff'>

            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


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
    textAlign: 'center',
    paddingBottom: 40,
    paddingTop: 75,
    fontSize: 45,
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
