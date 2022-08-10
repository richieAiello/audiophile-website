import { useState } from 'react';
import { useCartState } from '../../context/CartContext';
import { Form, Field, ErrorMessage } from 'formik';
import CheckoutValidation from './CheckoutValidation';
import BillingSection from './BillingSection';
import ShippingSection from './ShippingSection';

const CheckoutForm = props => {
  const cart = useCartState();
  // Toggle on radio button change to display either eMoney fields or cash on delivery text
  const [cash, setCash] = useState(false);

  return (
    <CheckoutValidation>
      <Form className="form">
        <section className="form__wrapper">
          <h1 className="heading mb-8">Checkout</h1>
          <BillingSection />
          <ShippingSection />
          <section>
            <h2 className="form__heading--section">
              Payment Details
            </h2>
            <div className="form__wrapper--secondary"></div>
          </section>
        </section>
        <section className="form__wrapper">
          <h3>Summary</h3>
          <button type="submit" className="form__submit">
            Submit
          </button>
        </section>
      </Form>
    </CheckoutValidation>
  );
};

export default CheckoutForm;
