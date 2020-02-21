
<<<<<<< HEAD
import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import RNCalendarEvents from "react-native-calendar-events";
import * as AddCalendarEvent from 'react-native-add-calendar-event';

=======
import React, {Component, useState} from 'react';
import {
    Picker,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    View,
    Dimensions, Image
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
>>>>>>> d097a0f9ba2b482b14b84d81ad8f325a73fbccbf

export default class CreateNewEvent extends Component {
    static contextType = NavigationContext;

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
    const eventConfig = {
        title
        // and other options
    };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
                // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
                // These are two different identifiers on iOS.
                // On Android, where they are both equal and represent the event id, also strings.
                // when { action: 'CANCELED' } is returned, the dialog was dismissed
                console.warn(JSON.stringify(eventInfo));
            })
            .catch((error: string) => {
                // handle error such as when user rejected permissions
                console.warn(error);
                });
        presentEventCreatingDialog(eventConfig);
    render() {
        const navigation = this.context;
        return (
            <View style={styles.Container}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleCircle}>
                        <Text style={styles.titleText}>New Event</Text>
                    </View>
                </View>
                <View style={styles.answerFillContainer}>
                    <View>
                        <Text style={styles.aboveText}>For</Text>
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
                            {/*onPress={() => } This is where you do the on press calendar selector*/}
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
