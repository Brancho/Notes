import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';



class Header extends Component {
  render() {
    console.log(this.props.currScreen);
    return (
      <View style={styles.headCont}>
        {this.props.currScreen == "Home" ? <Text style={styles.title}>NOTES</Text> :
          <TouchableHighlight style={{flex: 1}} onPress={this.props.addNote}>
            <Icon name="chevron-small-left" size={40} style={styles.icon}/>
          </TouchableHighlight>
        }
      </View>

    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headCont: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 8,
    justifyContent: 'center'
  },
  icon: {
    color: '#D53833'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: "Raleway",
    fontSize: 18
  }
});