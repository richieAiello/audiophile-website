import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import FormSection from './FormSection';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';
import Summary from './summary/Summary';
import { initialValues, validate } from './formData';
import cashIcon from '../../assets/cash.svg';

const CheckoutForm = () => {
  const [cash, setCash] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate(cash)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {props => (
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
              <CustomRadio
                handleChange={props.handleChange}
                state={cash}
                setState={setCash}
              />
              {!cash ? (
                <>
                  <CustomInput
                    name="eMoneyNumber"
                    type="text"
                    label="e-Money Number"
                    placeholder="123456789"
                  />
                  <CustomInput
                    name="eMoneyPIN"
                    type="text"
                    label="e-Money PIN"
                    placeholder="1234"
                  />
                </>
              ) : (
                <div className="grid grid-flow-col gap-x-8">
                  <img
                    src={cashIcon}
                    alt=""
                    className="form__icon--cash"
                  />
                  <p className="font-normal opacity-50">
                    The ‘Cash on Delivery’ option enables you to pay
                    in cash when our delivery courier arrives at your
                    residence. Just make sure your address is correct
                    so that your order will not be cancelled.
                  </p>
                </div>
              )}
            </FormSection>
          </section>
          <section className="form__wrapper">
            <Summary />
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;