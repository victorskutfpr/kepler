import { keplerGlReducer } from "kepler.gl/reducers";
import React from "react";
import { taskMiddleware } from "react-palm/tasks";
import { applyMiddleware, combineReducers, createStore } from "redux";
import KeplerGl from "kepler.gl";
import { Provider, useDispatch } from "kepler.gl/node_modules/react-redux";
import { addDataToMap } from "kepler.gl/actions";
import Map from "./components/Kepler";

const reducer = combineReducers({
  keplerGl: keplerGlReducer,
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Map
        onClick={() => {
          console.log("click");
        }}
      />
    </Provider>
  );
}
