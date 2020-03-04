import React, {Component} from 'react';
import {
  ImageBackground,
  Button,
  Platform,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  View,
  AppRegistry,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import { Timer } from 'react-native-stopwatch-timer'
import TimeToStudy from "./TimeToStudy";


export default class TimerScreen extends Component {
    //static contextType = NavigationContext;

    constructor(props) {
      super(props);
      this.state = {
        timerStart: true,
        totalDuration: 60000,
        timerReset: false,
        currentTime: 0,
      };
      this.toggleTimer = this.toggleTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
      this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
      this.setState({timerStart: !this.state.timerStart, timerReset: false});
    }

    resetTimer() {
      this.setState({timerStart: false, timerReset: true});
    }

    resetStopwatch() {
      this.setState({stopwatchStart: false, stopwatchReset: true});
    }

    render() {
        const {route, navigation} = this.props;
        const userTime = route.params.userTime;

        return (
            <View style={styles.Container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Timer Running</Text>
                </View>
                <View style={styles.bottomOval}/>

                  <TouchableOpacity style={styles.startStopButton} onPress={this.toggleTimer}>
                      <Timer totalDuration={(this.state.totalDuration * userTime)} secs start={this.state.timerStart}
                             reset={this.state.timerReset}
                             options={options}
                             handleFinish={this.handleTimerComplete}
                             getTime={this.getFormattedTime} />
                    <Text style={styles.startStopButtonText}>{!this.state.timerStart ? "Press to Start" : "Press to Pause"}</Text>
                  </TouchableOpacity>

                <View style={styles.buttonContainer}>
                  {/*START TO BE REMOVED*/}
                  <TouchableOpacity style={styles.Button} onPress={this.resetTimer}>
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.navigate('OverviewScreen')}
                    underlayColor='fff'>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                </View>
              {/*END TO BE REMOVED*/}
            </View>
        );
    }

   handleTimerComplete = (title, message) => {
    Alert.alert('Good Job!', 'Pat yourself on the back', [
      {text: 'Home', onPress: () => this.handleReset()},
    ], {cancelable: false});
  };

  handleReset = () => {
    const navigation = this.props.navigation;
    this.resetTimer();
    navigation.navigate('OverviewScreen');
  };

}

const options = {
  container: {
    backgroundColor: '#E0F5F6',
    width: Math.round(Dimensions.get('window').height)/10 * 2,
      position: 'absolute',
      top: '40%',
      right: '10%',
  },
  text: {
    fontSize: 40,
    color: '#47C494',
    textAlign: 'center',
  }
};


const styles = StyleSheet.create({
    Container: {
      flex: 1,
      height: Math.round(Dimensions.get('window').height),
      width: Math.round(Dimensions.get('window').width),
      backgroundColor: '#E0F5F6',
      alignContent: 'center',
    },
    titleBarContainer: {
      flex: .2,
      justifyContent: 'center',
      alignContent: 'center',
    },
    titleBar: {
        height: Math.round(Dimensions.get('window').height),
        marginTop: -Math.round(Dimensions.get('window').height) / 2 + 40 ,
        backgroundColor: '#47C494',
        width: Math.round(Dimensions.get('window').width),
        borderRadius: Math.round(Dimensions.get('window').width) * 2,
        shadowOpacity: 0.8,
        shadowOffset: {width: 1, height: 4}
    },
    titleText: {
      color: '#E0F5F6',
      position: 'absolute',
      top: '50%',
      width: '100%',
      textAlign: 'center',
      fontSize: 50,
      fontFamily: 'rock-salt',
    },
    buttonContainer: {
        flex: .4,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: -15,
        position: 'absolute',
        top: '70%',
        left: '5%',
    },
    startStopButton: {
        flex: .31,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: (Math.round(Dimensions.get('window').width/2)) - ((Math.round(Dimensions.get('window').height)/10 * 2.5)/2),
        position: 'absolute',
        top: '40%',
        height: Math.round(Dimensions.get('window').height)/10 * 2.5,
        width: Math.round(Dimensions.get('window').height)/10 * 2.5,
        backgroundColor:'#E0F5F6',
        borderRadius:Math.round(Dimensions.get('window').height)/10 * 2.5 * 2,
        borderWidth: 1,
        borderColor: '#000',
        shadowOpacity: 0.8,
        shadowOffset: {width: 1, height: 13}
    },
    startStopButtonText: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 20,
        color: '#47C494',
    },
    Button: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: (Math.round(Dimensions.get('window').width/4)) - ((Math.round(Dimensions.get('window').height)/10 * 2)/2),
        marginTop: 30,
        height: Math.round(Dimensions.get('window').height)/10,
        width: Math.round(Dimensions.get('window').height)/10 * 2,
        backgroundColor:'#E0F5F6',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        shadowOpacity: 0.8,
        shadowOffset: {width: 1, height: 13}
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#47C494',
    },
    bottomOval: {
        height: Math.round(Dimensions.get('window').height),
        marginTop: -40,
        backgroundColor: '#47C494',
        width: Math.round(Dimensions.get('window').width),
        borderRadius: Math.round(Dimensions.get('window').width) * 2,
        shadowOpacity: 0.8,
        shadowOffset: {width: 1, height: 4}
    },
});


AppRegistry.registerComponent('TimerScreen', () => TimerScreen);
