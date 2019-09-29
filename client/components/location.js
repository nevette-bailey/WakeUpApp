import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { setLocationThunk } from '../reducers/location';
import { getConditionsThunk } from '../reducers/currentConditions';
import { getShoesThunk } from '../reducers/shoe';
import Conditons from './conditions';

//was exported directly before, but I exported connect below...
class AppLocation extends Component {
  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    //set current location onto store
    this.props.setLocationThunk(this.state.location);
    //get current conditions from location and set conditions & temperature on redux state
    await this.props.getConditionsThunk(this.state.location);
    //get clothes associated with current weather conditions
    await this.props.getShoesThunk(this.props.temperature);
  };

  render() {
    let text = 'Waiting...';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.props.currentConditions);
    }

    return (
      <View style={styles.container}>
        {/* <Text style={styles.paragraph}>{text}</Text> */}
        <Conditons />
      </View>
      // null
    );
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    location: state.location,
    currentConditions: state.currentConditions,
    temperature: state.temperature
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocationThunk: (location) => dispatch(setLocationThunk(location)),
    getConditionsThunk: (location) => dispatch(getConditionsThunk(location)),
    getShoesThunk: (temperature) => dispatch(getShoesThunk(temperature))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLocation);
