import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';



class EventPage extends Component {


  render() {
    console.log(this.props);
    const event = this.props.data.events[this.props.id];
    const window = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Image source={{uri : event.img}} style={{height: window.width, width: window.width}} />
        <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={{marginBottom: 20}}>{event.description}</Text>
        </View>
        <Text onPress={Actions.Home} style={styles.button}>Back to events list</Text>
      </View>
    );
  }
}
export default EventPage;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  button: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#337CA0',
    color: 'white'
  },
  eventName: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});