import React, { useReducer, createContext } from 'react';
import { counterReducer } from './reducer';

const count = 0;

export const CounterContext = createContext(count);

function CounterStore(props) {
  const [state, dispatch] = useReducer(counterReducer, count);
  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterStore };
