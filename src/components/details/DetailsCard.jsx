import BackBtn from '../shared-components/BackBtn';
import DetailsCardImage from './DetailsCardImage';
import NewText from '../shared-components/NewText';
import DetailsAdd from './DetailsAdd';
import useProduct from '../../hooks/useProduct';
import clsx from 'clsx';

const DetailsCard = props => {
  const product = useProduct(props.slug);

  return (
    <div
      className="container text-black mb-[5.5rem]"
      slug={props.slug}
    >
      <BackBtn />
      <DetailsCardImage
        desktop={product?.image.desktop}
        tablet={product?.image.tablet}
        mobile={product?.image.mobile}
      />
      {product?.new && <NewText className="mt-8" />}
      <h1
        className={`heading--product mb-6 md:mb-8 ${clsx({
          'mt-6 md:mt-4': product?.new,
          'mt-10 md:[4.875rem] lg:mt-[7.875rem]': !product?.new,
        })}`}
      >
        {product?.name}
      </h1>
      <p className="opacity-50 mb-6">{product?.description}</p>
      <p
        className="font-bold text-[1.125rem] leading-[1.536875rem]
      tracking-[0.080625rem] mb-8"
      >
        $ {product?.price?.toLocaleString()}
      </p>
      <DetailsAdd />
    </div>
  );
};

export default DetailsCard;
