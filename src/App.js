import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyText, MyButton } from './components';

import { Store } from './modules';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Store>
          <MyButton title="Press Me" color="#5399e6" />
          <MyText />
        </Store>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
