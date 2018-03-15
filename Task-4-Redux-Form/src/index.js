import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = [
  {id: "123", value: 'Task #1'},
  {id: "123567", value: 'Task #2'}
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'EDIT_TASK') {
      let newState = state.map((item) => {
        if(item.id === action.payload.id) item.value = action.payload.value;
        return item;
      })

      return newState;
  } else if (action.type === 'DELETE_TASK') {
      let newState = state.reduce((result, item) => {
        if(item.id !== action.payload.id) result.push(item);
        return result;
      }, [])

      return newState;
  }
  return state;
}

const store = createStore(playlist);

/*
store.subscribe(() => {
  console.log(store.getState());
})
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
