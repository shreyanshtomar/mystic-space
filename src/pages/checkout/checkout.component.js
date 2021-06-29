import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.components';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';


const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-header-block'>
                <span>Product</span>
            </div>
            <div className='checkout-header-block'>
                <span>Description</span>
            </div>
            <div className='checkout-header-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-header-block'>
                <span>Price</span>
            </div>
            <div className='checkout-header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem => (
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                )
            )

        }
        <div className='total'>TOTAL: ${ total }</div>
        <div className='test-warning'>
            <br />
            4242 4242 4242 4242 - Exp: Any Future Date - CVV: Any three digit number
        </div>
        <StripeCheckoutButton price={ total } />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})


export default connect(mapStateToProps)(CheckoutPage);