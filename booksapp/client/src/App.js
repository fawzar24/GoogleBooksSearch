import React from 'react';
import Nav from './components/Nav';
import Books from './pages/Books';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = {["/", "/books"]}>
              <Books/>
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
