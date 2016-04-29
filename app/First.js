/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var Third = require('./components/Third');
var api = require('./util/api');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class First extends Component {
  onButtonPress() {
    this.props.navigator.push({
      id: 'Second',
      passProps: 'Awesomenesssauce'
    })
  }

  goToNotes() {
    api.getNotes()
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          id: 'FirebaseList',
          title: 'Firebase List',
          passProps: {
            notes: res
          }
        })
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}>Our First Text</Text>
        <TouchableHighlight on Press={this.onButtonPress.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}> I will do something now!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToNotes.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Notes!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  helloText: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'stretch'
  },
  tapText: {
    color: 'white'
  },
  tapHighlight: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});


module.exports = First;
