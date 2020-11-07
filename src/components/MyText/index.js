import React, { useContext } from 'react';
import { Text } from 'react-native';
import { CounterContext } from '../../modules/store';
import styles from './styles';

const MyText = ({ style }) => {
  const { state } = useContext(CounterContext);
  return <Text style={[styles.text, style]}>{state}</Text>;
};

export default MyText;
