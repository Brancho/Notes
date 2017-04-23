/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from './components/Home.ios.js'
import CreateEvent from './components/CreateEvent.ios.js'
import EventCreated from './components/EventCreated.ios.js'
import { Provider } from 'react-redux';
import store from './store';
// import App from './app'



class eventApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="EventCreated" component={EventCreated} title="EventCreated"/>
            <Scene key="CreateEvent" component={CreateEvent} title="CreateEvent"/>
            <Scene key="Home" component={Home} title="Home" initial={true}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default eventApp;

AppRegistry.registerComponent('AwesomeProject', () => eventApp);