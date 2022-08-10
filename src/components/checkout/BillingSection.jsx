import StandardField from './StandardField';
const BillingSection = props => {
  return (
    <section>
      <h2 className="form__heading--section">Billing Details</h2>
      <div className="form__wrapper--secondary">
        <StandardField
          name="name"
          type="text"
          label="Name"
          placeholder="Richie Rich"
        />
        <StandardField
          name="email"
          type="email"
          label="Email Address"
          placeholder="richierich@somemail.com"
        />
        <StandardField
          name="phone"
          type="text"
          label="Phone Number"
          placeholder="(555) 555-5555"
        />
      </div>
    </section>
  );
};

export default BillingSection;
