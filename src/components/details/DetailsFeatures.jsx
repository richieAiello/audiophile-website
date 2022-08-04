import getProduct from '../../helpers/getProduct';

const DetailsFeatures = props => {
  const product = getProduct(props.slug);

  return (
    <section
      className="container text-black mb-[5.5rem]"
      slug={props.slug}
    >
      <h2 className="heading mb-6">Features</h2>
      <p className="opacity-50 mb-6">{product?.featuresOne}</p>
      <p className="opacity-50">{product?.featuresTwo}</p>
    </section>
  );
};

export default DetailsFeatures;
