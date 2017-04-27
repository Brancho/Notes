import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import Home from './components/Home.ios.js'
import EditNote from './components/EditNote.ios.js'
import { Provider } from 'react-redux';
import store from './store';
import ConnectedRouter from './app.js';
import Loading from './components/Loading.ios.js'



const Scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="EditNote" component={EditNote} title="EditNote" />
    <Scene key="Home" component={Home} title="Home" />
    <Scene key="Loading" component={Loading} initial={true}/>
  </Scene>
);


class NotesApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    );
  }
}


export default NotesApp;

AppRegistry.registerComponent('AwesomeProject', () => NotesApp);