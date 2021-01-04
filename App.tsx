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


//Need to figure out how to require in PanResponder, npm?
export default class App extends React.Component {
  componentDidMount(){
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event,gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        //Will finish this function
      },
      onPanResponderRelease: (event, gestureState) => {
        //Will finish this function
      }
    });
  }


  renderUsers() {
    return Users.map((item, i) => {
      return(
        <Animated.View style={{height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}}>
  
          {/* I cannot find a solution to this style error  */}
          <Image 
            style = {{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}} 
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
