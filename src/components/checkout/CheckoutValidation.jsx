import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const CheckoutValidation = ({ children }) => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .matches(/^[a-z ,.'-]+$/i, 'Letters only')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        phone: Yup.string()
          .required('Required')
          .phone('US', null, 'Invalid 10 digit US phone number'),
        message: Yup.string().max(
          200,
          'Must be 200 characters or less.'
        ),
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
