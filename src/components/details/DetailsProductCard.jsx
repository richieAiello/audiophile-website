import DetailsProductImage from './DetailsProductImage';
import DetailsProductContent from './DetailsProductContent';
import DetailsProductAdd from './DetailsProductAdd';
import useFindProduct from '../../hooks/useFindProduct';

const DetailsProductCard = ({ slug }) => {
  const product = useFindProduct(slug);

  return (
    <div
      className="mb-[5.5rem] md:mb-[7.5rem] md:grid md:gap-x-[4.375rem] 
      md:grid-cols-[280px,1fr] md:h-[480px]"
      slug={slug}
    >
      <DetailsProductImage product={product} />
      <div className="md:self-end md:pb-[2.8125rem]">
        <DetailsProductContent product={product} />
        <DetailsProductAdd product={product} />
      </div>
    </div>
  );
};

export default DetailsProductCard;
