import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

const count = 0;

export const CounterContext = createContext(count);

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, count);
  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default Store;
