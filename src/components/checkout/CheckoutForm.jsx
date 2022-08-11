import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import FormSection from './FormSection';
import CustomInput from './CustomInput';
import Summary from './Summary';
import { initialValues, validation } from './formData';

const CheckoutForm = () => {
  // Toggle on radio button change to display either eMoney fields or cash on delivery text
  const [cash, setCash] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="form">
          <section className="form__wrapper">
            <h1 className="heading mb-8">Checkout</h1>
            <FormSection heading="Billing Details">
              <CustomInput
                name="name"
                type="text"
                label="Name"
                placeholder="Richie Rich"
              />
              <CustomInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="richierich@somemail.com"
              />
              <CustomInput
                name="phone"
                type="text"
                label="Phone Number"
                placeholder="(555) 555-5555"
              />
            </FormSection>
            <FormSection heading="Shipping Info">
              <CustomInput
                name="address"
                type="text"
                label="Shipping Address"
                placeholder="1337 Audio Avenue"
              />
              <CustomInput
                name="city"
                type="text"
                label="City"
                placeholder="New York City"
              />
              <CustomInput
                name="state"
                type="text"
                label="State"
                placeholder="NY"
              />
              <CustomInput
                name="zip"
                type="text"
                label="ZIP Code"
                placeholder="10001"
              />
            </FormSection>
            <FormSection heading="Payment Details">
              <span id="radio-group">Payment Methods</span>
              <div
                role="group"
                aria-labelledby="radio-group"
                className="form__radio"
              >
                <label className="form__input--radio">
                  <Field
                    type="radio"
                    name="payment"
                    value="eMoney"
                    className="form__radio__select"
                  />
                  e-Money
                </label>
                <label className="form__input--radio ">
                  <Field
                    type="radio"
                    name="payment"
                    value="cash"
                    className="form__radio__select"
                  />
                  Cash On Delivery
                </label>
              </div>
            </FormSection>
          </section>
          <section className="form__wrapper">
            <Summary />
            <button type="submit" className="form__submit">
              Submit
            </button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
