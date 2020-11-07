import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { CounterContext } from '../../modules/store';

import styles from './styles';

const MyButton = ({ style, title }) => {
  const { dispatch } = useContext(CounterContext);

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => dispatch({ type: 'INCREMENT' })}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
