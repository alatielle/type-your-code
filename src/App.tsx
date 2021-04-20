import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import { Home } from "./components/Home";
import { Articles } from "./components/Articles";

import "./App.css";

export function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="App-list">
              <li>
                <NavLink exact activeClassName="Link-active" to="/">home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="Link-active" to="/articles">articles</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
