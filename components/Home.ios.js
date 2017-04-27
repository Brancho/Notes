import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableWithoutFeedback,
  ListViewDataSource,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';





export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: '',
      description: ''
    };
  }

  render() {
    const window = Dimensions.get('window');
    const note = this.ds.cloneWithRows(this.props.data.notes);
    const rowCount = note.getRowCount();
    const getTheRightNote = (id) => {
      console.log(id);
      Actions.EditNote({id: id});
    };
    console.log(this.props.data.notes)
    return (

      <View style={styles.container}>
        <ListView style={styles.listCont} dataSource={note} renderRow={(note, sectionID, rowID) =>
          <TouchableWithoutFeedback onPress={getTheRightNote.bind(this, note.noteID)} >
            <View style={styles.viewContainer}>
              <View style={styles.textCont}><Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteTitle}>{note.noteID}</Text>
                <Text style={styles.noteDesc}>{note.description}</Text>
              </View>

            </View>
          </TouchableWithoutFeedback>
        } renderSeparator={(sectionId, rowId) => rowId != rowCount - 1 ? <View key={rowId} style={styles.separator}/> : null}/>

        <View style={styles.buttonCont}>
          <TouchableHighlight onPress={Actions.EditNote} style={styles.button}>
            <Text>New</Text>
            {/*<Icon name="note" size={30} style={styles.icon}/>*/}
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  listCont: {
    paddingLeft: 20,
    paddingRight: 20
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E'
  },
  noteTitle: {
    fontSize: 16,
    // fontFamily: 'Raleway',
    fontWeight: "600",
    marginBottom: 5
  },
  noteDesc: {
    // fontFamily: 'Raleway',
    fontSize: 13,
    fontWeight: "400"
  },
  textCont: {
    justifyContent: 'flex-start',
    width: window.width - 120
  },
  buttonCont: {
    position: 'absolute',
    flexDirection: 'row',
    right: 20,
    bottom: 20
  },
  button: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: 'red',
    width: 60,
    height: 60,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {width: 10, height: 10}
  },
  icon: {
    color: 'white'
  }
});

