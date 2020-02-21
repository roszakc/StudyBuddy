import React, { Component } from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

//const App = () => {
export default class StudyForm extends React.Component {
  render () { return (
    <View >
      <Text > Time to Study</Text>
      <View>
        <TextInput 
          placeholder="Location" />
        <TextInput
          placeholder="Time Goal"
        />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
});

//export default App;