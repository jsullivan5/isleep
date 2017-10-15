import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class MeditationListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
		title: 'Meditations',
		headerStyle: { marginTop: Platform.OS === 'android' ? 24: 0 }
	});

  state = { meditations: [] };

  componentWillMount() {
    let meditationData = require('../assets/data/meditation_data');
    this.setState({ meditations: meditationData });
  }

  _getImage(meditation) {
    return meditation.id == 1 ? require('../assets/images/sky-moon-cloud-min.jpg') : require('../assets/images/beach-meditation-min.jpg')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {
          this.state.meditations.map((meditation) => (
            <TouchableHighlight
              key={meditation.id}
              underlayColor={'#181818'}
              onPress={ () => navigate('meditation', {meditation}) }
              >
              <View>
                <Image
                style={styles.imageStyle}
                source={ this._getImage(meditation) } >
                  <View style={styles.textContainer}>
                      <Text style={styles.textStyle}>{meditation.title}      {meditation.length}</Text>
                  </View>
                </Image>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50
  },
  imageStyle: {
    height: 200,
    width: null
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default MeditationListScreen;
