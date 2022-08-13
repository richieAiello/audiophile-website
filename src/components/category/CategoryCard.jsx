import NewText from '../shared-components/NewText';
import SeeProductBtn from '../shared-components/SeeProductBtn';
import useFindProduct from '../../hooks/useFindProduct';

const CategoryCard = ({ slug }) => {
  const product = useFindProduct(slug);

  return (
    <section
      className="container lg:flex lg:even:flex-row-reverse lg:items-center
      lg:justify-between"
      slug={slug}
    >
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={product?.categoryImage.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product?.categoryImage.tablet}
        />
        <img
          src={product?.categoryImage.mobile}
          alt=""
          className="h-[352px] w-full object-cover rounded-lg mb-8 
          md:mb-[3.25rem] lg:h-[560px] lg:w-[540px] lg:mb-0"
        />
      </picture>
      <div
        className="grid text-center justify-items-center 
        lg:text-left lg:justify-items-start lg:w-[445px]"
      >
        {product?.new && <NewText className="mb-6 md:mb-4" />}
        <h2
          className="uppercase font-bold text-[1.75rem] leading-[2.375rem] 
          tracking-[0.0625rem] max-w-[12ch] mb-6 md:mb-8"
        >
          {product?.name}
        </h2>
        <p className="mb-6 md:max-w-[573px] lg:mb-10">
          {product?.description}
        </p>
        <SeeProductBtn path={slug} orange />
      </div>
    </section>
  );
};

export default CategoryCard;
