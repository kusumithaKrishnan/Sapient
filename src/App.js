import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store/main";

function App() {
  return (
    <div className="App-header">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
