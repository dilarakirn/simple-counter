import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyText, MyButton } from './components';

import { CounterStore } from './modules/store';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <CounterStore>
          <MyButton title="Press Me" color="#5399e6" />
          <MyText />

          {/* Examples */}
          {/* <MyButton title="Press Me" color="#5399e6" />
          <MyText /> */}
        </CounterStore>

        {/* Examples */}
        {/* <CounterStore>
          <MyButton title="Press Me" color="#5399e6" />
          <MyText />

          <MyButton title="Press Me" color="#5399e6" />
          <MyText />
        </CounterStore> */}
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
