import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

//This aptly named function will take any state("IN OUR CASE THE ROOT REDUCER STATE") from the Redux store and pass it to the props of the React component.
// const mapStateToProps = (state) => ({
//   hidden: selectCartHidden(state),
//   currentUser: selectCurrentUser(state),
// });
//OR(createStructuredSelector will automatically pass the top level state to the selectors)
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
});

//The "connect" (chech the function definition - fn + f12) function is a higher-order function that connects the Redux store to a React component.
export default connect(mapStateToProps)(Header);
