import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J7bkWSFO9Ch8dciSgUtZRxMfL1hAEBw2eTMmOkXL5oHipwpXRv4Xr2oBXcOLxO50WuYeogyLcBjtrNmTIxG3y8H004o3yzCkJ';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='mystic-space'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/YbL.svg'
      description={`Your Total Price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
