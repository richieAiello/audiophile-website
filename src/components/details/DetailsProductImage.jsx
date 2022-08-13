const DetailsProductImage = ({ product }) => {
  const image = product?.image;

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={image?.desktop} />
      <source media="(min-width: 768px)" srcSet={image?.tablet} />
      <img
        src={image?.mobile}
        alt=""
        className="rounded-lg h-[327px] w-full object-cover 
        md:h-[480px] md:w-[280px] lg:h-[560px] lg:w-[540px]"
      />
    </picture>
  );
};

export default DetailsProductImage;
