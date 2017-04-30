import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/headerS';



class Header extends Component {
  render() {
    return (
      <View style={styles.headCont}>
        {this.props.currScreen == "Home" ? <Text style={styles.title}>NOTES</Text> :
          <TouchableHighlight style={styles.back} onPress={this.props.addNote} underlayColor="white">
            <Icon name="chevron-small-left" size={40} style={styles.icon}/>
          </TouchableHighlight>
        }
      </View>

    );
  }
}

export default Header;

