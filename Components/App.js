import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Photos from './Photos';

class App extends Component{

  render() {

    return (
      <View style={styles.container}>
        <Photos/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
