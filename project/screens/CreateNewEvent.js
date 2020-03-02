import React, {Component} from 'react';
import {NavigationContext} from '@react-navigation/native'
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

export default class CreateNewEvent extends Component {

    render() {
        const navigation = this.props.navigation;
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
                            placeholder="Task"
                        />
                        <Text style={styles.leftText}>On</Text>
                        <TouchableOpacity height={120}
                            onPress={() => navigation.navigate('CalendarDisplay')}>
                            <Image style={styles.calendarIcon} source={require("../assets/images/calendarIcon.png")}/>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate('OverviewScreen')}>
                            <Text style={styles.addButtonText}>Add</Text>

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
