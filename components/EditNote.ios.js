import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import uuidV4 from 'uuid/v4';
import Header from './Header.ios.js';
import styles from '../styles/editNoteS';


class EditNote extends Component {
  constructor(props) {
    super(props);
    const note = this.props.notes.find((n)=>{ return !!n.noteID && n.noteID ==  this.props.id});

    this.state = {
      title: note ? note.title : "",
      description: note ? note.description : "",
      noteID: note ? note.noteID : uuidV4()
    };
  }



  render() {
    const window = Dimensions.get('window');
    const addNote = () => {
      if(this.state.title || this.state.description != "") {
        this.props.id == undefined ? this.props.addNote(this.state) : this.props.editNote(this.state);
      }
        Actions.Home();
    };

    return (

      <View style={styles.container}>
        <Header addNote={addNote.bind(this)} currScreen={this.props.title}/>
        <View style={styles.inputCont}>
        <TextInput style={styles.noteTitle} placeholder="Title" keyboardType='default' maxLength={38} selectionColor="#B74138" keyboardAppearance="default" value={this.state.title ? this.state.title : ""} onChangeText={(text) => {
          this.setState({title: text});
        }}/>
        <ScrollView>
          <TextInput style={{ height: window.height - 100, fontSize: 17, fontFamily: 'Raleway' }} multiline={true} placeholder="Your note..." keyboardType='default' selectionColor="#B74138" keyboardAppearance="default" value={this.state.description ? this.state.description : ""} onChangeText={(text) => {
            this.setState({description: text});
          }} />
        </ScrollView>
          </View>
      </View>

    );
  }
}

export default EditNote;

