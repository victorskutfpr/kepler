import logo from './logo.svg';
import './App.css';
import { KeplerGl } from 'kepler.gl';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { taskMiddleware } from 'react-palm/tasks';
import { keplerGlReducer } from 'kepler.gl/reducers';
import { React } from 'react';

// integrate kepler.gl reducer into your app's reducer
const reducer = combineReducers({
  keplerGl: keplerGlReducer
  // your other reducers here
});

// create store
const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

function App() {
  return (
      <KeplerGl
        id="map"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        width={window.innerWidth}
        height={window.innerHeight}
      />
  );
}

export default App;


