import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './DemoStyles.css';
import './index.css';
import StateTest from './components/stateTest';
import Login from './components/stateTest/stateLogin';

// code inspired from: https://thinkster.io/tutorials/build-a-real-world-react-redux-application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}></Route>
        <Route exact path="/" component={StateTest}></Route>
        <Route path="/login" component={Login} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
