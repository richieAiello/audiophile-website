import useFindProduct from '../../hooks/useFindProduct';

const DetailsGallery = props => {
  const product = useFindProduct(props.slug);
  const gallery = product?.gallery;

  return (
    <div className="grid gap-y-5 mb-[7.5rem]" slug={props.slug}>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={gallery?.first.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={gallery?.first.tablet}
        />
        <img
          src={gallery?.first.mobile}
          alt=""
          className="object-cover w-full rounded-lg h-[174px] object-top"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={gallery?.second.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={gallery?.second.tablet}
        />
        <img
          src={gallery?.second.mobile}
          alt=""
          className="object-cover w-full rounded-lg h-[174px] object-top"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={gallery?.third.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={gallery?.third.tablet}
        />
        <img
          src={gallery?.third.mobile}
          alt=""
          className="object-cover w-full rounded-lg h-[384px]"
        />
      </picture>
    </div>
  );
};

export default DetailsGallery;
