import SeeProductBtn from '../shared-components/SeeProductBtn';

const DetailsSuggestionsCard = props => {
  const item = props.item;
  const image = item?.image;

  return (
    <div className="grid justify-items-center">
      <picture>
        <source media="(min-width: 1440px)" srcSet={image?.desktop} />
        <source media="(min-width: 768px)" srcSet={image?.tablet} />
        <img
          src={image?.mobile}
          alt=""
          className="rounded-lg h-[120px] w-full object-cover mb-8 md:mb-10 md:h-[318px]"
        />
      </picture>
      <h3 className="font-bold text-[1.5rem] leading-[2.04875rem] tracking-[0.106875rem] mb-8">
        {item?.name}
      </h3>
      <SeeProductBtn path={item?.slug} orange />
    </div>
  );
};

export default DetailsSuggestionsCard;
