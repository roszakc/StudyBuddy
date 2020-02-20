
import * as React from 'react';
import {ImageBackground, Button, Platform, StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function OverviewScreen({navigation}) {
  return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/images/HomePageLeaf.jpg")}>
          <View style={styles.titleCircle}>
            <Text style={styles.titleText}>OverviewScreen</Text>
          </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    height: 1000,
    width: null,
    alignContent: 'center',
  }
});
