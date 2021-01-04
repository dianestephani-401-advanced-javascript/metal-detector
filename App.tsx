import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, withSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//This is my stylesheet for each page, from YouTube 
const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
      <Container>
        <Content>
          <Swiper
            loop = {false}
            showsPagination = {false}
            index = {0}
            >

            <View style = {styles.slideDefault}>
              <Text style = {styles.text}>Camera</Text>
            </View>

            <View style = {styles.slideDefault}>
              <Text style = {styles.text}>Chat</Text>
            </View>

          </Swiper>
        </Content>
      </Container>
    );
  }
}
