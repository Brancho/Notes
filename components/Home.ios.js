import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableWithoutFeedback,
  ListViewDataSource,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from './Header.ios.js';
import Swipeout from 'react-native-swipeout';
import store from '../store';
import styles from '../styles/homeS';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      notes: store.getState().notes
    };

    store.subscribe(() => {
      this.setState({
        notes: store.getState().notes
      })
    });
  }

  render() {
    console.log('store : ',store.getState());
    console.log('propsoviii', this.props);
    const window = Dimensions.get('window');
    console.log(this.state.notes);
    const note = this.ds.cloneWithRows(this.state.notes);
    const rowCount = note.getRowCount();
    const getTheRightNote = (id) => {
      Actions.EditNote({id: id});
    };

    const deleteNote = (note) => {
      this.props.deleteNote(note);
        this.setState({
          notes: store.getState().notes
      })
    };
    const pinNote = (note) => {
      this.props.pinNote(note);
      this.setState({
        notes: store.getState().notes
      })
    };


    return (
      <View style={styles.container}>
        <Header currScreen={this.props.title}/>
        <ListView style={styles.listCont} dataSource={note} enableEmptySections={true} renderRow={(note, sectionID, rowID) =>

          <Swipeout right={[{
            text: 'DELETE',
            backgroundColor: '#4F8258',
            onPress: deleteNote.bind(this, note),
            component: <View style={styles.btnCont} ><Icon name="trash" size={25} style={styles.btnIcon}/><Text style={styles.btnText}>DELETE</Text></View>
          },
            {
              text: 'PIN',
              backgroundColor: '#3B6982',
              onPress: pinNote.bind(this, note),
            component: <View style={styles.btnCont} ><Icon name="pin" size={25} style={styles.btnIcon}/><Text style={styles.btnText}>PIN</Text></View>
            }
            ]} autoClose={true} backgroundColor= 'transparent' >
          <TouchableOpacity onPress={getTheRightNote.bind(this, note.noteID, note)} >
            <View style={styles.viewContainer}>
              <View style={styles.textCont}><Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteDesc} numberOfLines={2} >{note.description}</Text>
              </View>

            </View>
          </TouchableOpacity>
            </Swipeout>
        } renderSeparator={(sectionId, rowId) => rowId != rowCount - 1 ? <View key={rowId} style={styles.separator}/> : null}/>

        <View style={styles.buttonCont}>
          <TouchableHighlight onPress={Actions.EditNote} style={styles.button} underlayColor="#B74138">
            <Icon name="note" size={25} style={styles.icon}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}





