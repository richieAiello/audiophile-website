import { Form, Field, ErrorMessage } from 'formik';
import useCartState from '../../context/CartContext';
import CheckoutValidation from './CheckoutValidation';

const CheckoutForm = props => {
  const cart = useCartState();

  return (
    <CheckoutValidation>
      <Form className="form">
        <section className="form__wrapper">
          <h1>Checkout</h1>
          <section>
            <h2>Billing Details</h2>
            <div></div>
          </section>
          <section>
            <h2>Shipping Info</h2>
            <div></div>
          </section>
          <section>
            <h2>Payment Details</h2>
            <div></div>
          </section>
        </section>
        <section className="form__wrapper">
          <h3>Summary</h3>
        </section>
      </Form>
    </CheckoutValidation>
  );
};

export default CheckoutForm;
