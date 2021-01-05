//Code from repo: https://github.com/nathvarun/React-Native-Layout-Tutorial-Series/blob/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%231%20Setup%20UI%20%26%20add%20PanResponder/App.js

import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
  { id: "1", uri: require('./assets/images/Ozzy-Osbourne.jpg') },
  { id: "2", uri: require('./assets/images/kerry-king-slayer.jpg') },
  { id: "3", uri: require('./assets/images/dave-mustaine-megadeth.jpg') },
]

export default class App extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

      }
    })
  }

  renderUsers = () => {

    return Users.map((item, i) => {

      return (
        <Animated.View
          {...this.PanResponder.panHandlers}
          key={item.id} style={[{ transform: this.position.getTranslateTransform() }, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
            source={item.uri} />

        </Animated.View>
      )
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>

        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
