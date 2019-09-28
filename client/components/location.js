import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { setLocationThunk } from '../reducers/location';
import { getLocationIdThunk } from '../reducers/geoposition';
import { getConditionsThunk } from '../reducers/currentConditions';

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
    // this.props.setLocationThunk(this.state.location);
    // this.props.getLocationIdThunk(this.state.location);
    //get current conditions with geoposition and set on redux state
    this.props.getConditionsThunk(this.state.location);
  };

  render() {
    let text = 'Waiting..';
    const currentConditions = JSON.stringify(this.props.currentConditions);
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.props.location);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> {currentConditions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
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
    geoposition: state.geoposition,
    currentConditions: state.currentConditions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocationThunk: (location) => dispatch(setLocationThunk(location)),
    getLocationIdThunk: (location) => dispatch(getLocationIdThunk(location)),
    getConditionsThunk: (geoposition) =>
      dispatch(getConditionsThunk(geoposition))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLocation);
