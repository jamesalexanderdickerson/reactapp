/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var api = require('./util/api');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

class Rovers extends Component {
  onButtonPress() {
    console.log("Hello");
  };

  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
    }
  }
  componentWillMount() {
    var name = 'Curiosity';
    var sol = 100;
    var camera = 'FHAZ';
    api.getRecentPhotos(name, sol, camera).then((res) => {
      var response = res.photos[0].img_src;
      this.setState({
        imageURL : response
      })
    }).catch((error) =>{
    console.log("------------ no image ------------");
  });
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}> Recent Rover Photos</Text>
        <Image style={styles.image} source={{uri:this.state.imageURL}} />
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
  image: {
    flex: 1,
    height: 160,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloText: {
    flex: 1,
    fontSize: 20,
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


module.exports = Rovers;
