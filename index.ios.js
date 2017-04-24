
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import Home from './components/Home.ios.js'
import CreateEvent from './components/CreateEvent.ios.js'
import EventCreated from './components/EventCreated.ios.js'
import EventPage from './components/EventPage.ios.js'
import { Provider, connect } from 'react-redux';
import store from './store';
import ConnectedRouter from './app.js';



const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="EventPage" component={EventPage} title="EventPage"/>
    <Scene key="EventCreated" component={EventCreated} title="EventCreated"/>
    <Scene key="CreateEvent" component={CreateEvent} title="CreateEvent"/>
    <Scene key="Home" component={Home} title="Home" initial={true}/>
  </Scene>
);


class EventApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}



export default EventApp;

AppRegistry.registerComponent('AwesomeProject', () => EventApp);