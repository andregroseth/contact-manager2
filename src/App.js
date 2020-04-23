import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "./App.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <h1>The App Component</h1>
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
