import React, { useState, useEffect, useReducer } from 'react';

const CounterState = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      case 'DECREMENT':
        return { value: state.value - 1 };
      default:
        return state;
    }
  };

  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);
  const [state2, dispatch] = useReducer(reducer, { value: 0 });

  useEffect(() => {
    console.log('render');
    console.log({
      state,
      value,
    });
    return () => {
      console.log('cleanup');
      console.log({
        state,
        value,
      });
    };
  }, []);

  return (
    <div>
      <p>현재 상태 : {state}</p>
      <p>거꾸로 : {value}</p>
      <p>new Value : {state2.value}</p>
      <button
        onClick={() => {
          setState(state + 1);
          setValue(value - 1);
          dispatch({ type: 'INCREMENT' });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setState(state - 1);
          setValue(value + 1);
          dispatch({ type: 'DECREMENT' });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default CounterState;
