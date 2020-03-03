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

    getFormattedTime(time) {
        this.currentTime = time;
    }

    render() {
        const {route, navigation} = this.props;
        const userTime = route.params.userTime;

        return (
            <View style={styles.Container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Timer Running</Text>
                </View>

                <View >
                  <Timer totalDuration={(this.state.totalDuration * userTime)} secs start={this.state.timerStart}
                    reset={this.state.timerReset}
                    options={options}
                    handleFinish={this.handleTimerComplete}
                    getTime={this.getFormattedTime} />

                  <TouchableOpacity onPress={this.toggleTimer}>
                    <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
                  </TouchableOpacity>

                  {/*START TO BE REMOVED*/}
                  <TouchableOpacity onPress={this.resetTimer}>
                    <Text style={{fontSize: 30}}>Reset</Text>
                  </TouchableOpacity>

                </View>


                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() => navigation.navigate('OverviewScreen')}
                    underlayColor='fff'>
                    <Text style={styles.getStartedButtonText}>Home</Text>
                </TouchableOpacity>
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
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 200,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    height: Math.round(Dimensions.get('window').height),
    width: Math.round(Dimensions.get('window').width),
    backgroundColor: '#E0F5F6',
    alignContent: 'center',
  },
  titleBarContainer: {
    flex: .2,
  },
  titleBar: {
    height: Math.round(Dimensions.get('window').height)/10,
    backgroundColor: '#EFEFEF',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 4}
  },
  titleText: {
    color: '#000000',
    position: 'absolute',
    top: '15%',
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'rock-salt',
  },
  buttonContainer: {
    flex: .25,
    flexDirection: 'row',
    height: 95,
    marginTop: -100,
  },
  Button: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 32.5,
    marginTop: 30,
    height: 95,
    width: 95,
    backgroundColor:'#47C494',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  timerIcon: {
    height: 52.5,
    width: 52.5,
    marginLeft: 20,
    marginTop: 5,
  },
  timerButtonText: {
    color:'#E0F5F6',
    textAlign:'center',
    fontSize: 15,
    paddingTop: 5,
  },
});


AppRegistry.registerComponent('TimerScreen', () => TimerScreen);
