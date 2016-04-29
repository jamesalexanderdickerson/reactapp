import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Third extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}>{this.props.objectExample.car}</Text>
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

Third.propTypes = {
  message: React.PropTypes.string.isRequired,
  objectExample: React.PropTypes.object.isRequired
}

module.exports = Third;
