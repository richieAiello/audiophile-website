import { useCartState } from '../../context/CartContext';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { initialValues, validate } from './formData';
import FormSection from './FormSection';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';
import Summary from './summary/Summary';
import OrderComplete from './complete/OrderComplete';
import cashIcon from '../../assets/cash.svg';

const CheckoutForm = () => {
  const cart = useCartState();
  const [cash, setCash] = useState(false);
  const [hidden, setHidden] = useState(true);

  return (
    <>
      {cart.length === 0 ? (
        <p className="mb-8 font-bold text-xl">
          Please add items to your cart before visiting this page.
        </p>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validate(cash)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setHidden(false);
              setSubmitting(false);
            }, 400);
          }}
        >
          {props => (
            <Form
              className="form md:mb-[7.5rem] lg:grid 
              lg:grid-cols-[730px,1fr] lg:gap-x-8 lg:items-start
              lg:mb-[8.75rem]"
            >
              <section className="form__wrapper md:p-8">
                <h1 className="heading mb-8 md:mb-10">Checkout</h1>
                <FormSection
                  className="mb-8 md:mb-14"
                  heading="Billing Details"
                >
                  <CustomInput
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Sam Wise"
                  />
                  <CustomInput
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="thebrave@somemail.com"
                  />
                  <CustomInput
                    name="phone"
                    type="text"
                    label="Phone Number"
                    placeholder="(555) 555-5555"
                  />
                </FormSection>
                <FormSection
                  className="mb-8 md:mb-14"
                  heading="Shipping Info"
                >
                  <CustomInput
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="1379 Shire Way"
                    colSpan
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
                    <div className="grid grid-flow-col gap-x-8 items-center md:col-span-2">
                      <img
                        src={cashIcon}
                        alt=""
                        className="form__icon--cash"
                      />
                      <p className="font-normal opacity-50">
                        The ???Cash on Delivery??? option enables you to
                        pay in cash when our delivery courier arrives
                        at your residence. Just make sure your address
                        is correct so that your order will not be
                        cancelled.
                      </p>
                    </div>
                  )}
                </FormSection>
              </section>
              <section className="form__wrapper lg:sticky lg:top-[5.625rem]">
                <Summary />
              </section>
            </Form>
          )}
        </Formik>
      )}
      {!hidden && <OrderComplete />}
    </>
  );
};

export default CheckoutForm;
