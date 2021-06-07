import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  //After storing data in firestore("createUserProfileDocument" in firebase.utils.js) we have to "update our state" in app!!
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //We want it bcoz we want to check if our db has updated userRef with any new data

        //then we are gonna subscribe meaning we're gonna listen to this userRef to any changes to that data
        userRef.onSnapshot(snapShot => {
          //snapshot by default doesn't have any properties so we have to user snapshot.data() to get 'em.
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
      }
      else
        this.setState({ currentUser: userAuth });
    });
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
