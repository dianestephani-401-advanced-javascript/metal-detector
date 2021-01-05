import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
// import PanResponder from 'universal-panresponder';
import { SafeAreaProvider, withSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons';


//Default imports
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//Screen height and width
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

//User photos, possibly props
const Users = [
  { id: "1", uri: require('./assets/images/Ozzy-Osbourne.jpg')},
  { id: "2", uri: require('./assets/images/kerry-king-slayer.jpg')},
  { id: "3", uri: require('./assets/images/dave-mustaine-megadeth.jpg')},
];


export default class App extends React.Component {

  constructor(props){
    //These lines added with John
    super(props);
    //Create a type for props, Google syntax
    this.PanResponder = {};

    //Originally this.position
    // const position = new Animated.ValueXY();

    this.state = {
      //currentIndex will be the index position of the picture being displayed.
      currentIndex: 0,
      position: new Animated.ValueXY()
    }
  }
  // componentDidMount(){
    PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event,gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        this.state.position.setValue({
          x: gestureState.dx,
          y: gestureState.dy
        })
      },
      onPanResponderRelease: (event, gestureState) => {
        //Will finish this function
      }
    });

    //Added via Medium article https://medium.com/@leonardobrunolima/react-native-tips-using-animated-and-panresponder-components-to-interact-with-user-gestures-4620bf27b9e4
    // this.state = { PanResponder, position};
  // }

  //This function renders a user photo to the page, and is called down below in the content view section.
  renderUsers() {
    const transform = new Animated.ValueXY();
    const blarg = transform.getTranslateTransform();

    return Users.map((item, i) => {
      return(
        <Animated.View 
        {...this.PanResponder.panHandlers}
        //Changing this style element to an array and using transform enables us to put the photo on an X and Y axis.
        style={[{transform: blarg}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}
        key = {item.id}>
  
          <Image 
            style = {{flex:1, resizeMode: 'cover', borderRadius: 20}} 
            source = {item.uri} />
  
        </Animated.View>
  
      )

    }).reverse();
  }  



  render(){  
    return (
      <View style = {{flex:1}}>

        <View style = {{height:60}}>
        {/* Header */}

        </View>

        <View style = {{flex:1}}>
        {/* Content View */}
          {this.renderUsers()};
        </View>

        <View style = {{height:60}}>
        {/* Footer */}
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
    justifyContent: 'center'
  }
})