const FormSection = ({ heading, children }) => {
  return (
    <section>
      <h2 className="form__heading--section">{heading}</h2>
      <div className="form__wrapper--secondary">{children}</div>
    </section>
  );
};

export default FormSection;
