import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { getShoesThunk } from '../reducers/shoe';

class Shoes extends Component {
  state = {
    temperature: this.props.temperature
  };
  
  render() {
    if (this.props.shoes) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Shoes:
            {}
          </Text>
          <Text>Icons made by </Text>
          <Text
            style={{ color: 'blue' }}
            onPress={() =>
              Linking.openURL(
                'https://www.flaticon.com/authors/smalllikeart" title="smalllikeart'
              )
            }
          >
            smalllikeart
          </Text>
          <Text>from</Text>
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.flaticon.com/m')}
          >
            www.flaticon.com
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
    shoes: state.shoes,
    temperature: state.temperature
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShoesThunk: (temperature) => dispatch(getShoesThunk(temperature))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shoes);
