import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import FC from "./FC";
import ClassComponent from "./ClassComponent";

const store = createStore(() => ({}));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <FC />
          <ClassComponent />
        </header>
      </Provider>
    </div>
  );
}

export default App;
