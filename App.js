import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import ListImages from './src/components/ListImages';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Header />
      <ListImages />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b7cedf',
    alignItems: 'center',
  },
});

export default App;
