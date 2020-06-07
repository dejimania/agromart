import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import { AgroMartDataStore } from './data/DataStore';
import { ShopConnector } from './shop/ShopConnector';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ AgroMartDataStore }>
        <Router>
          <Switch>
            <Route path="/shop" component={ ShopConnector } />
            <Redirect to="/shop" />
          </Switch>
        </Router>
  
      </Provider>
    );
  }
  
}

export default App;
