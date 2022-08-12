import { Field, ErrorMessage } from 'formik';

const CustomInput = ({
  name,
  label,
  className,
  placeholder,
  type,
}) => {
  return (
    <div className="form__wrapper--field">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <ErrorMessage name={name}>
        {msg => <div className="form__error">{msg}</div>}
      </ErrorMessage>
      <Field
        name={name}
        type={type}
        className={`form__input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;