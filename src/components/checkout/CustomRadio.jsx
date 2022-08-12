import { Field } from 'formik';

const CustomRadio = ({ handleChange, setState, state }) => {
  return (
    <div className="form__wrapper--radio">
      <div id="radio-group" className="form__label">
        Payment Methods
      </div>
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
            onChange={e => {
              setState(!state);
              handleChange(e);
            }}
          />
          e-Money
        </label>
        <label className="form__input--radio ">
          <Field
            type="radio"
            name="payment"
            value="cash"
            className="form__radio__select"
            onChange={e => {
              setState(!state);
              handleChange(e);
            }}
          />
          Cash On Delivery
        </label>
      </div>
    </div>
  );
};

export default CustomRadio;
