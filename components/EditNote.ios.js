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


class EditNote extends Component {
  constructor(props) {
    super(props);
    const note = this.props.data.notes.find((n)=>{ return !!n.noteID && n.noteID ==  this.props.id});
    console.log(this.props.data.notes);

    this.state = {
      title: note ? note.title : "",
      description: note ? note.description : "",
      noteID: note ? note.noteID : uuidV4()
    };
  }



  render() {
    const window = Dimensions.get('window');
    const addNote = () => {
      this.props.id == undefined ? this.props.addNote(this.state) : this.props.editNote(this.state);
      setTimeout(function(){
        Actions.Home();
      },100);

    };

    return (

      <View style={styles.container}>
        <Text onPress={addNote}>Save</Text>
        <TextInput style={styles.noteTitle} placeholder="Title" keyboardType='default' maxLength={38} selectionColor="red" keyboardAppearance="default" value={this.state.title ? this.state.title : ""} onChangeText={(text) => {
          this.setState({title: text});
        }}/>
        <ScrollView>
          <TextInput style={{
            height: window.height - 100,
            fontSize: 17
          }} multiline={true} placeholder="Your note..." keyboardType='default' selectionColor="red" keyboardAppearance="default" value={this.state.description ? this.state.description : ""} onChangeText={(text) => {
            this.setState({description: text});
          }} onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
          }}/>
        </ScrollView>
      </View>

    );
  }
}

export default EditNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60
  },
  noteTitle: {
    height: 40,
    fontSize: 20,
    fontWeight: '600'
  }
});