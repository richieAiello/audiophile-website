import { useState } from 'react';
import { useCartState } from '../../context/CartContext';
import { Form, Field, ErrorMessage } from 'formik';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
import CheckoutValidation from './CheckoutValidation';

const CheckoutForm = props => {
  const cart = useCartState();
  const [cash, setCash] = useState(false);

  return (
    <CheckoutValidation>
      <Form className="form">
        <section className="form__wrapper">
          <h1 className="heading mb-8">Checkout</h1>
          <section>
            <h2 className="form__heading--section">
              Billing Details
            </h2>
            <div className="form__wrapper--secondary">
              <div className="form__wrapper--field">
                <label htmlFor="name" className="form__label">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="form__input"
                  placeholder="Name"
                />
                <ErrorMessage name="name">
                  {msg => <div className="form__error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form__wrapper--field">
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form__input"
                  placeholder="youremail@mail.com"
                />
                <ErrorMessage name="email">
                  {msg => <div className="form__error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form__wrapper--field">
                <label htmlFor="phone" className="form__label">
                  Phone Number
                </label>
                <Field
                  name="phone"
                  type="text"
                  className="form__input"
                  placeholder="+1 202-555-0136"
                />
                <ErrorMessage name="phone">
                  {msg => <div className="form__error">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </section>
          <section>
            <h2 className="form__heading--section">Shipping Info</h2>
            <div className="form__wrapper--secondary"></div>
          </section>
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
