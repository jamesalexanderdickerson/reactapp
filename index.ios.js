var First = require('./app/First');
var Second = require('./app/Second');
var State = require('./app/State');
var Rovers = require('./app/Rovers');
var FirebaseList = require('./app/FirebaseList');
var MapExample = require('./app/MapExample');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

class reactapp extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'MapExample'
        }}
        renderScene={this.navigatorRenderScene}
        />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'First':
        return (<First passProps={route.passProps} navigator={navigator} title="First" />);
      case 'Second':
        return (<Second passProps={route.passProps} navigator={navigator} title="Second" />);
      case 'State':
        return (<State passProps={route.passProps} navigator={navigator} title="State" />);
      case 'Rovers':
        return (<Rovers passProps={route.passProps} navigator={navigator} title="Rovers" />);
      case 'FirebaseList':
        return (<FirebaseList passProps={route.passProps} navigator={navigator} title="FirebaseList" />);
      case 'MapExample':
        return (<MapExample passProps={route.passProps} navigator={navigator} title="MapExample" />);

      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('reactapp', () => reactapp);
