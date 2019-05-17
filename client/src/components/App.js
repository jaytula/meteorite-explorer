import React from "react";
import "./App.css";
import SearchPanel from "./SearchPanel";
import { Provider } from "react-redux";

import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Meteorite Explorer</h1>
        <SearchPanel />
      </div>
    </Provider>
  );
}

export default App;
