import DetailsProductImage from './DetailsProductImage';
import DetailsProductContent from './DetailsProductContent';
import DetailsProductAdd from './DetailsProductAdd';
import useFindProduct from '../../hooks/useFindProduct';

const DetailsProductCard = ({ slug }) => {
  const product = useFindProduct(slug);

  return (
    <div className="mb-[5.5rem]" slug={slug}>
      <DetailsProductImage product={product} />
      <div>
        <DetailsProductContent product={product} />
        <DetailsProductAdd product={product} />
      </div>
    </div>
  );
};

export default DetailsProductCard;
