import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './client/store.js';
import AppLocation from './client/components/location.js';
import Conditions from './client/components/conditions.js';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text> </Text>
        <Text>Wake Up!</Text>
        <AppLocation />
        <Conditions />
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
  }
});
