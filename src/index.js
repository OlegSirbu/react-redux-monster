import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import About from './About';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

// import { Router, Route, hashHistory } from 'react-router';
import reducers from './reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);



// import { createStore } from 'redux';
// function playList(state = [], action) {
//   if(action.type === 'ADD_TRACK'){
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }
// const store = createStore(playList);

// store.subscribe(()=>{
//   console.log('subscribe',store.getState());
//   const list = document.querySelector('.list');
//   list.innerHTML = '';
//   store.getState().forEach((track)=>{
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   })
// })

// const addTrackBtn = document.querySelector('.addTrack');
// addTrackBtn.addEventListener('click', function() {
//   const trackInput = document.querySelector('.trackInput').value;
// store.dispatch({ type: 'ADD_TRACK', payload: trackInput })
// });


