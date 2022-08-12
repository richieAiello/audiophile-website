import * as Yup from 'yup';
import 'yup-phone-lite';

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  payment: 'eMoney',
  eMoneyNumber: '',
  eMoneyPIN: '',
};

const cashValidation = {
  name: Yup.string()
    .matches(/^[A-z][A-z ,.'-]+$/, 'Letters only')
    .max(20, 'Must be 20 characters or less.')
    .required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  phone: Yup.string()
    .required('Required!')
    .phone('US', 'Please enter a valid phone number.'),
  address: Yup.string()
    .matches(/^[A-Za-z0-9][A-Za-z0-9 ]+$/, 'Enter an address.')
    .max(25, 'Must be 25 characters or less.')
    .required('Required!'),
  city: Yup.string()
    .matches(/^[A-Za-z][A-Za-z ]+$/, 'Enter a city, letters only.')
    .max(15, 'Max 15 characters.')
    .required('Required!'),
  state: Yup.string()
    .matches(/^[A-Za-z][A-Za-z ]+$/, 'Enter a state, letters only.')
    .max(12, 'Max 12 characters.')
    .required('Required!'),
  zip: Yup.string('Required!')
    .matches(/^[0-9]{5}$/, 'Enter a 5 digit zip code, numbers only.')
    .required('Required!'),
};

const eMoneyValidation = {
  eMoneyNumber: Yup.string()
    .matches(
      /^[0-9]{9}$/,
      'Enter a 9 digit e-Money number, numbers only.'
    )
    .required('Required!'),
  eMoneyPIN: Yup.string()
    .matches(
      /^[0-9]{4}$/,
      'Enter a 4 digit e-Money PIN, numbers only.'
    )
    .required('Required!'),
};

export const validate = cash => {
  if (cash) {
    return Yup.object(cashValidation);
  } else {
    return Yup.object({ ...cashValidation, ...eMoneyValidation });
  }
};
