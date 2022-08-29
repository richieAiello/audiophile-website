import { useField, ErrorMessage } from 'formik';
import clsx from 'clsx';

const CustomInput = ({
  label,
  colOne,
  colTwo,
  colSpan,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={`form__wrapper--field ${clsx({
        'md:col-start-1': colOne,
        'md:col-start-2': colTwo,
        'md:col-span-2': colSpan,
      })}`}
    >
      <label htmlFor={field.name} className="form__label">
        {label}
      </label>
      <ErrorMessage name={field.name}>
        {msg => <div className="form__error">{msg}</div>}
      </ErrorMessage>
      <input
        {...field}
        {...props}
        className={`
          form__input
          ${clsx({
            'form__input--error': meta.touched && meta.error,
          })}
        `}
      />
    </div>
  );
};

export default CustomInput;
