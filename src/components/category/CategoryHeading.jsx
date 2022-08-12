const CategoryHeading = props => {
  return (
    <div
      className="flex justify-center items-center h-[102px] bg-hero-black mb-16
      md:h-[246px] md:mb-[7.5rem]"
    >
      <h1 className="heading--product text-white">{props.heading}</h1>
    </div>
  );
};

export default CategoryHeading;
