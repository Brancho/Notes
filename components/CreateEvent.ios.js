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
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';



class CreateEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventName: '',
      eventDescription: '',
      eventImgURL: 'http://www.clipartkid.com/images/656/black-and-white-square-clip-art-8lblvX-clipart.jpg'
    };

  }






  render() {

    const createEvent = (e) => {
      e.preventDefault();
      this.props.addEvent(this.state);
      // dispatch('ADD_EVENT', this.state);
      Actions.EventCreated();
    };

    const window = Dimensions.get('window');
    return (
      <View style={{flex: 1, paddingTop: 60}}>
      <Text style={styles.title}>CreateEvent</Text>
        <View style={styles.container}>

        <TextInput
          style={{height: 40}}
          placeholder="Event name..."
          onChangeText={(eventName) => this.setState({eventName})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Event description..."
          onChangeText={(eventDescription) => this.setState({eventDescription})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Event image url..."
          onChangeText={(eventImgURL) => this.setState({eventImgURL})}
        />

        <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 20, width: window.width}}>
          <Image source={{uri : this.state.eventImgURL}} style={{width: 70, height: 70, marginRight: 10}} />
          <View style={{justifyContent:'flex-start', width: window.width - 120}}>
        <Text style={{fontSize: 20}}>{this.state.eventName}</Text>
        <Text>{this.state.eventDescription}</Text>
          </View>
        </View>

        </View>

        <Text onPress={createEvent} style={styles.h1}>Create an event!</Text>
        </View>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     event : this.state
//   }
// }
//
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: () => {
//       dispatch(this.createEvent());
//     }
//   }
// }
//
//
//
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateEvent)



export default CreateEvent;





const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#337CA0',
    color: 'white'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'lightgray'
  }
});
