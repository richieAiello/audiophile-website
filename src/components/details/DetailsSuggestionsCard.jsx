import SeeProduct from '../shared-components/SeeProduct';

const DetailsSuggestionsCard = props => {
  const item = props.item;
  const image = item.image;

  return (
    <div className="grid gap-y-8 justify-items-center">
      <picture>
        <source media="(min-width: 1440px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt=""
          className="rounded-lg h-[120px] w-full object-cover"
        />
      </picture>
      <h3 className="text-black font-bold text-[1.5rem] leading-[2.04875rem] tracking-[0.106875rem]">
        {item.name}
      </h3>
      <SeeProduct path={item.slug} orange />
    </div>
  );
};

export default DetailsSuggestionsCard;
