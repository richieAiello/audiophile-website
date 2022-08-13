const FormSection = ({ heading, children, className }) => {
  return (
    <section className={className}>
      <h2 className="form__heading--section">{heading}</h2>
      <div className="form__wrapper--secondary md:grid-cols-2 md:gap-x-4">
        {children}
      </div>
    </section>
  );
};

export default FormSection;
