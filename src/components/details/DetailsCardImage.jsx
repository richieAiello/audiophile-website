const DetailsCardImage = props => {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={props.desktop} />
      <source media="(min-width: 768px)" srcSet={props.tablet} />
      <img
        src={props.mobile}
        alt=""
        className="rounded-lg h-[327px] w-full object-cover"
      />
    </picture>
  );
};

export default DetailsCardImage;
