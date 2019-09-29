import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { setTempThunk } from '../reducers/temperature';

//this is a functional component to display current conditions only

class Conditions extends Component {
  render() {
    if (this.props.currentConditions.main) {
      const temp = JSON.stringify(this.props.currentConditions.main.temp);
      const icon = JSON.stringify(this.props.currentConditions.weather[0].icon);

      const uriOne = 'http://www.openweathermap.org/img/wn/';
      const uriTwo = '@2x.png';
      const url = `${uriOne.concat(icon.substring(1, 4), uriTwo)}`;

      return (
        <View style={styles.container}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: url }} />
          <Text style={styles.title}>
            Current Temp: {Math.round(temp * (9 / 5) - 459.67)} {'\u2109'}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
  title: {
    margin: 24,
    fontSize: 24,
    textAlign: 'left'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    currentConditions: state.currentConditions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTempThunk: (temperature) => dispatch(setTempThunk(temperature))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conditions);
