import React, {Component} from 'react'
import 'react-native-gesture-handler';
import {Dimensions, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const navigation = this.props.navigation;
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <View style={styles.Container}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Calendar</Text>
                </View>
                <View>
                    <CalendarPicker
                        selectedDayColor={'#47C494'}
                        dayShape={'square'}
                        dayLabelsWrapper={{
                            borderBottomWidth: 2,
                            borderTopWidth: 2,
                            borderLeftWidth: 2,
                            borderRightWidth: 2,
                            borderColor: '#000',
                        }}
                        onDateChange={this.onDateChange}
                    />

                    <View>
                        <Text>SELECTED DATE:{ startDate }</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('OverviewScreen')}
                    underlayColor='fff'>

                    <Text style={styles.homeButtonText}>Home</Text>
                </TouchableOpacity>
            </View>
        );

        /*
        function calendar(){
            if(RNCalendarEvents.authorizationStatus()){

            }
            else{
                RNCalendarEvents.authorizeEventStore();
            }
            RNCalendarEvents.findCalendars()
            RNCalendarEvents.saveEvent(title, details);
        }
        */
    }


}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        height: Math.round(Dimensions.get('window').height),
        width: Math.round(Dimensions.get('window').width),
        backgroundColor: '#E0F5F6',
        alignContent: 'center',
    },
    titleCircle: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').width) / 4,
        marginTop: -(Math.round(Dimensions.get('window').width) / 2)/1.5,
        borderWidth: 2,
        backgroundColor: '#47C494'
    },
    titleText: {
        color: '#E0F5F6',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        margin: 0,
        fontSize: 50,
        fontFamily: 'rock-salt',
    },
    homeButton: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 120,
        height: 60,
        borderWidth: 2,
        backgroundColor: '#47C494',
        marginLeft: Math.round(Dimensions.get('window').width)/2 - 60,
        marginTop: 40,
    },
    homeButtonText: {
        color:'#E0F5F6',
        textAlign:'center',
        fontSize: 20,
    },
});
