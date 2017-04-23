import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class EventCreated extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20, flex: 1, flexDirection: 'column', marginTop: 200}}>You created a new event!</Text>
        <Text onPress={Actions.Home} style={styles.h1}>Back to the events list</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#337CA0',
    color: 'white'
  }
});


