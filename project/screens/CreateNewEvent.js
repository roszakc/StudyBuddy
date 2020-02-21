
import React, {Component} from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import RNCalendarEvents from "react-native-calendar-events";
import * as AddCalendarEvent from 'react-native-add-calendar-event';


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
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Create New Event</Text>
                </View>
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() => navigation.navigate('OverviewScreen')}
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
