import DetailsProductImage from './DetailsProductImage';
import DetailsProductContent from './DetailsProductContent';
import DetailsProductAdd from './DetailsProductAdd';
import useFindProduct from '../../hooks/useFindProduct';

const DetailsProductCard = ({ slug }) => {
  const product = useFindProduct(slug);

  return (
    <div
      className="mb-[5.5rem] md:mb-[7.5rem] md:flex md:justify-between
      md:items-end lg:mb-40"
      slug={slug}
    >
      <DetailsProductImage product={product} />
      <div
        className="md:w-[340px] md:pb-[2.8125rem] 
        lg:pb-[4.5rem] lg:w-[445px]"
      >
        <DetailsProductContent product={product} />
        <DetailsProductAdd product={product} />
      </div>
    </div>
  );
};

export default DetailsProductCard;
