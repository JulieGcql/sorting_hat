import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Result from './Containers/Result'


const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];

const defaultState = {
  houses
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX":
      return {
        indexSelected: Math.floor(Math.random() * 4),
        houses: houses
      }
    default:
      return state
  }
}
const store = createStore(reducer);



class App extends Component {

  render() {

    return ( 
    <div className = "App" >
      <Provider store = {store} >
      <Result / >
      </Provider> 
    </div>
    );
  }
}

export default App;