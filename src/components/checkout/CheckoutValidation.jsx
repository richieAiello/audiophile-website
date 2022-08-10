import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const CheckoutValidation = ({ children }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        regionState: '',
        payment: 'eMoney',
        eMoneyNumber: '',
        eMoneyPIN: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(/^[a-z ,.'-]+$/i, 'Letters only')
          .max(20, 'Must be 20 characters or less.')
          .required('Required!'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required!'),
        // Set a condition chekcing if phone number matches the selected country
        phone: Yup.string()
          .required('Required!')
          .phone('US', 'Please enter a valid phone number.'),
        address: Yup.string()
          .max(25, 'Must be 25 characters or less.')
          .required('Required!'),
        zip: Yup.number()
          .positive()
          .integer()
          .min(5, 'Enter a 5 digit zip code.')
          .max(5, 'Enter a 5 digit zip code.')
          .required('Required!'),
        city: Yup.string()
          .max(15, 'Max 15 characters.')
          .required('Required!'),
        country: Yup.string().required('Required!'),
        regionState: Yup.string().required('Required!'),
        eMoneyNumber: Yup.number()
          .positive()
          .integer()
          .min(9, 'Enter a 9 digit e-Money number.')
          .max(9, 'Enter a 9 digit e-Money number.')
          .required('Required!'),
        eMoneyPIN: Yup.number()
          .positive()
          .integer()
          .min(4, 'Enter a 4 digit e-Money PIN.')
          .max(4, 'Enter a 4 digit e-Money PIN.')
          .required('Required!'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {children}
    </Formik>
  );
};

export default CheckoutValidation;
