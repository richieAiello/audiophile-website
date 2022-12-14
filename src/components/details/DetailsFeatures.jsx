import useFindProduct from '../../hooks/useFindProduct';

const DetailsFeatures = props => {
  const product = useFindProduct(props.slug);

  return (
    <section
      className="mb-[5.5rem] md:mb-[7.5rem] lg:mb-0"
      slug={props.slug}
    >
      <h2 className="heading mb-6 md:mb-8">Features</h2>
      <p className="opacity-50 mb-6">{product?.featuresOne}</p>
      <p className="opacity-50">{product?.featuresTwo}</p>
    </section>
  );
};

export default DetailsFeatures;
