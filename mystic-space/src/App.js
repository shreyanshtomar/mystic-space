import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" component={ SignInSignUp } />
        </Switch>
      </div>
    );
  }

}

export default App;
