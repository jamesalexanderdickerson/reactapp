'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class State extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: "Playing with state"
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.smallText}>
          Using State
        </Text>
        <Text style={styles.largeText}>
          {this.state.text}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={
            (text) => this.setState({text})
          }
            value={this.state.text}
          />
        <Text style={styles.smallText}>
          Type in the input above.
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43',
  },
  smallText: {
    flex: 1,
    fontSize: 26,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 20,
    color: '#173e43',
  },
  input: {
    height: 40,
    borderColor: '#173e43',
    borderWidth: 2,
    textAlign: 'center'
  }
})

module.exports = State;
