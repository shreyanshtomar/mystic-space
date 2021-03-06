import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
//import './App.css';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'
import ErrorBoundary from './components/error-boundary/error-boundary.components';


const HomePage = lazy(() => import('./pages/homepage/homepage.components'));
const ShopPage = lazy(() => import('./pages/shop/shop.components'));
const SignInSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.components'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

class App extends React.Component {
  //We don't need constructor anymore to set the current state.

  unSubscribeFromAuth = null;

  //After storing data in firestore("createUserProfileDocument" in firebase.utils.js) we have to "update our state" in app!!
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //We want it bcoz we want to check if our db has updated userRef with any new data

        //then we are gonna subscribe meaning we're gonna listen to this userRef to any changes to that data
        userRef.onSnapshot(snapShot => {
          //snapshot by default doesn't have any properties so we have to user snapshot.data() to get 'em.
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={ <div>Loading...</div> }>
              <Route exact path="/" component={ HomePage } />
              <Route exact path='/checkout' component={ CheckoutPage } />
              <Route path="/shop" component={ ShopPage } />
              <Route exact path="/signin" render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />) } />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

}

//1. As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
//2. Dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

/* 
With React Redux, your components never access the store directly - connect does it for you.React Redux gives you two ways to let components dispatch actions:
  -By default, a connected component receives props.dispatch and can dispatch actions itself.
  -connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
*/

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

//We now have access to this.props.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
