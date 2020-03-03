
import React, {Component, useState} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View, Picker, TextInput, Dimensions, Image} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import RNCalendarEvents from "react-native-calendar-events";
import moment from 'moment';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
const TIME_NOW_IN_UTC = moment.utc();
const EVENT_TITLE = 'Lunch';

    /* 

    var
    event_title;
    eventTime;
    eventEndTime;
    notes;

    
const utcDateToString = (momentInUTC: moment): string => {
    let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return s;
};
*/


export default class CreateNewEvent extends Component {
    static contextType = NavigationContext;


    /*
    const eventConfig = {
        title,
        startDate: utcDateToString(startDateUTC),
        endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
        notes: 'tasty!',
        navigationBarIOS: {
            tintColor: 'orange',
            backgroundColor: 'green',
            titleColor: 'blue',
        },
    };




    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
        .then(
            (eventInfo: {
                calendarItemIdentifier: string,
                eventIdentifier: string,
            }) => {
                alert('eventInfo -> ' + JSON.stringify(eventInfo));
                }
            )
            .catch((error: string) => {
            // handle error such as when user rejected permissions
            alert('Error -> ' + error);
            });
*/

        //presentEventCreatingDialog(eventConfig);
    render() {
        const navigation = this.context;
        //presentEventCreatingDialog(eventConfig);
        /*
        var person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        document.getElementById("demo").innerHTML =
         "Hello " + person + "! How are you today?";
        }
        */
        return (
            <View style={styles.Container}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleCircle}>
                        <Text style={styles.titleText}>New Event</Text>
                    </View>
                </View>
                <View style={styles.answerFillContainer}>
                    <View>
                        <Text style={styles.aboveText}>
                            Event title: {EVENT_TITLE}
                            {'\n'}
                            Event Date Time:{' '}
                            {moment
                                .utc(TIME_NOW_IN_UTC)
                                .local()
                                .format('lll')}
                        </Text>
                        <TextInput style={styles.textInputBox}
                            placeholder="Subject" />
                        <Text style={styles.aboveText}>I have</Text>
                        <TextInput style={styles.textInputBox}
                            secureTextEntry={true}
                            placeholder="Task"
                        />
                        <Text style={styles.leftText}>On</Text>
                        <TouchableOpacity>
                            <Image style={styles.calendarIcon} source={require("../assets/images/calendarIcon.png")}/>
                            onPress={() =>{
                            CreateNewEvent.addToCalendar(EVENT_TITLE, TIME_NOW_IN_UTC);
                        } }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add</Text>
                            {/*onPress={() => } This is where you do the add event functionality*/}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

/*
static addToCalendar = (title: string, startDateUTC: moment) => {

    const eventConfig = {
        title,
        startDate: utcDateToString(startDateUTC),
        endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
        notes: 'tasty!',
        navigationBarIOS: {
            tintColor: 'orange',
            backgroundColor: 'green',
            titleColor: 'blue',
        },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
        .then(
            (eventInfo: {
                calendarItemIdentifier: string,
                eventIdentifier: string,
            }) => {
                alert('eventInfo -> ' + JSON.stringify(eventInfo));
            }
        )
        .catch((error: string) => {
            // handle error such as when user rejected permissions
            alert('Error -> ' + error);
        });


static editCalendarEventWithId = (eventId: string) => {
    const eventConfig = {
        eventId,
    };

    AddCalendarEvent.presentEventEditingDialog(eventConfig)
        .then(eventInfo => {
            alert('eventInfo -> ' + JSON.stringify(eventInfo));
        })
        .catch((error: string) => {
            alert('Error -> ' + error);
        });
};

static showCalendarEventWithId = (eventId: string) => {
    const eventConfig = {
        eventId,
        allowsEditing: true,
        allowsCalendarPreview: true,
        navigationBarIOS: {
            tintColor: 'orange',
            backgroundColor: 'green',
        },
    };

    AddCalendarEvent.presentEventViewingDialog(eventConfig)
        .then(eventInfo => {
            alert('eventInfo -> ' + JSON.stringify(eventInfo));
        })
        .catch((error: string) => {
            alert('Error -> ' + error);
        });
};
}
*/


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        height: Math.round(Dimensions.get('window').height),
        width: Math.round(Dimensions.get('window').width),
        backgroundColor: '#E0F5F6',
        alignContent: 'center',
    },
    titleContainer: {
        flex: .3,
    },
    titleCircle: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').width),
        borderRadius: Math.round(Dimensions.get('window').width),
        marginTop: -(((Math.round(Dimensions.get('window').height) - Math.round(Dimensions.get('window').width))/2)),
        backgroundColor: '#47C494'
    },
    titleText: {
        color:'#E0F5F6',
        textAlign:'center',
        fontSize: 50,
        fontFamily: 'rock-salt',
        paddingTop: Math.round(Dimensions.get('window').width)/2.5,
    },
    answerFillContainer: {
        flex: .7,
    },
    textInputBox: {
        backgroundColor: '#EFEFEF',
        width: Math.round(Dimensions.get('window').width/1.5),
        height: Math.round(Dimensions.get('window').height/15),
        borderWidth: 3,
        borderColor: '#47C494',
        marginLeft: Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/1.5)) /2),
        fontSize: 40,
    },
    aboveText: {
        fontSize: 30,
        color: '#000',
        marginLeft: Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/1.5)) /2),
        marginTop: 15,
    },
    leftText: {
        fontSize: 30,
        color: '#000',
        marginLeft: 2.7 * Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/1.5)) /2) + 15,
        marginTop: 40,
    },
    calendarIcon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -40,
        height: 120,
        width: 120,
        marginLeft: Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/2.42))),
    },
    addButton: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 120/2,
        backgroundColor: '#47C494',
        marginLeft: Math.round(Dimensions.get('window').width)/2 - 60,
        marginTop: 40,
    },
    addButtonText: {
        color:'#E0F5F6',
        textAlign:'center',
        fontSize: 40,
    },
});
