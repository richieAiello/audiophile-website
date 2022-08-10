import StandardField from './StandardField';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const ShippingSection = props => {
  return (
    <section>
      <h2 className="form__heading--section">Shipping Info</h2>
      <div className="form__wrapper--secondary">
        <StandardField
          name="address"
          type="text"
          label="Shipping Address"
          placeholder="1337 Audio Avenue"
        />
        <StandardField
          name="zip"
          type="text"
          label="ZIP Code"
          placeholder="10001"
        />
      </div>
    </section>
  );
};

export default ShippingSection;
