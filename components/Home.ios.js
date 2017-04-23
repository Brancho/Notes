import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends Component {
  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = { dataSource: ds.cloneWithRows(this.props.events) };
    //
    // this.bla = [
    //   {
    //     name: 'React Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://facebook.github.io/react/img/logo_og.png"
    //   },
    //   {
    //     name: 'Javascript Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://i.stack.imgur.com/Mmww2.png"
    //   },
    //   {
    //     name: 'Ruby on rails meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png"
    //   },
    //   {
    //     name: 'React Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://facebook.github.io/react/img/logo_og.png"
    //   },
    //   {
    //     name: 'Javascript Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://i.stack.imgur.com/Mmww2.png"
    //   },
    //   {
    //     name: 'Ruby on rails meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png"
    //   },
    //   {
    //     name: 'React Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://facebook.github.io/react/img/logo_og.png"
    //   },
    //   {
    //     name: 'Javascript Meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://i.stack.imgur.com/Mmww2.png"
    //   },
    //   {
    //     name: 'Ruby on rails meetup',
    //     description: 'Join us if you\'d like to learn more or if you have your own ReactJs experience to share that others can benefit from.',
    //     img: "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png"
    //   }
    // ];
  }

  render() {
    const window = Dimensions.get('window');

    const events = this.ds.cloneWithRows(this.props.events);
    const rowCount = events.getRowCount();
    // const rowCount = 3;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Events list</Text>
        <ListView
            style={styles.listCont}
            dataSource={events}
            renderRow={(event) =>

              <View style={styles.viewContainer}>
                <Image source={{uri : event.img}} style={styles.imgStyle} />
                <View style={{justifyContent:'flex-start', width: window.width - 120}}><Text style={{fontSize: 20}}>{event.name}</Text>
                  <Text>{event.description}</Text>
                </View>

              </View>

            }
            renderSeparator={(sectionId, rowId) => rowId != rowCount - 1 ? <View key={rowId} style={styles.separator} /> : null}
        />
        <Text onPress={Actions.CreateEvent} style={styles.h1}>Create an event</Text>
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
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'lightgray'
  },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#337CA0',
    color: 'white'
  },
        separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
      },
  imgStyle: {
    width: 70,
    height: 70,
    marginRight: 10
  }
});

