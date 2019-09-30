import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './client/store.js';
import AppLocation from './client/components/location.js';
import Constants from 'expo-constants';


console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text> </Text>
        <Text style={styles.header}>Good Morning!</Text>
        <AppLocation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    margin: 24,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-UltraLight',
    paddingTop: Constants.statusBarHeight,

  }
});
