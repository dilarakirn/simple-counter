export default function reducer(state, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      state = state + 1;
      return state;
    case 'DECREMENT':
      state = state - 1;
      return state;
    case 'RESET':
      state = 0;
      return state;
    default:
      throw new Error();
  }
}
