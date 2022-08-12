import { Field } from 'formik';

const CustomRadio = ({
  handleChange,
  setState,
  state,
  className,
}) => {
  return (
    <div className="form__wrapper--radio md:col-span-2 md:grid md:grid-cols-2 md:gap-x-4">
      <div id="radio-group" className="form__label">
        Payment Methods
      </div>
      <div
        role="group"
        aria-labelledby="radio-group"
        className={`form__radio ${className}`}
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
