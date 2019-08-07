import React from "react";
import "normalize.css/normalize.css";
import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Going from "./Going";
import NotGoing from "./NotGoing";
export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/going">Going</Link>
              </li>
              <li>
                <Link to="/notgoing">Not Going</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/going" component={Going} />
          <Route exact path="/notgoing" component={NotGoing} />
        </div>
      </Router>
    </Provider>
  );
};
