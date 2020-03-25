import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// DOM - Document Object Model.
import ReactDOM from "react-dom";

// ReactDOM renders the App.js application to root(The DOM defines a standard for accessing documents).
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
