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
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import Home from './components/Home.ios.js'
import CreateEvent from './components/CreateEvent.ios.js'
import EventCreated from './components/EventCreated.ios.js'
import { Provider, connect } from 'react-redux';
import store from './store';

import * as actionCreators from './actions/actionCreators';


// import App from './app'

// class eventApp extends Component {
//
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <Scene key="root">
//             <Scene key="EventCreated" component={EventCreated} title="EventCreated"/>
//             <Scene key="CreateEvent" component={CreateEvent} title="CreateEvent"/>
//             <Scene key="Home" component={Home} title="Home" initial={true}/>
//           </Scene>
//         </Router>
//       </Provider>
//     );
//   }
// }

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="EventCreated" component={EventCreated} title="EventCreated"/>
    <Scene key="CreateEvent" component={CreateEvent} title="CreateEvent"/>
    <Scene key="Home" component={Home} title="Home" initial={true}/>
  </Scene>
);

function mapStateToProps(state){
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}



const ConnectedRouter = connect(mapStateToProps, mapDispatchToProps)(Router);
// const store = createStore(appReducer);


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