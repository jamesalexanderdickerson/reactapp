var Third = require('./components/Third');
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Second extends Component {
  render() {
    console.log("Second Props: ", this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}>On Second</Text>
        <Text style={styles.smallText}>
          Passing Props through routes: {this.props.passProps}
        </Text>
        <Third
          message="With Love"
          objectExample={{
            "car" : ["mustang ", "corvette ", "jeep "]
          }}
          />
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
});


module.exports = Second;
