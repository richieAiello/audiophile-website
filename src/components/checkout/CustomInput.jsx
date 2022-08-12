import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';

const CustomInput = ({
  name,
  label,
  placeholder,
  type,
  colOne,
  colTwo,
  colSpan,
}) => {
  return (
    <div
      className={`form__wrapper--field ${clsx({
        'md:col-start-1': colOne,
        'md:col-start-2': colTwo,
        'md:col-span-2': colSpan,
      })}`}
    >
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <ErrorMessage name={name}>
        {msg => <div className="form__error">{msg}</div>}
      </ErrorMessage>
      <Field
        name={name}
        type={type}
        className="form__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
