import NewText from '../shared-components/NewText';
import clsx from 'clsx';

const DetailsProductContent = ({ product }) => {
  return (
    <div className="mb-6 md:mb-8">
      {product?.new && <NewText className="mt-8 md:mt-0" />}
      <h1
        className={`heading--product mb-6 md:mb-8 ${clsx({
          'mt-6 md:mt-4': product?.new,
          'mt-10 md:mt-0': !product?.new,
        })}`}
      >
        {product?.name}
      </h1>
      <p className="opacity-50">{product?.description}</p>
    </div>
  );
};

export default DetailsProductContent;
