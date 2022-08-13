const CategoryHeading = props => {
  return (
    <div
      className="flex justify-center items-center h-[102px] bg-hero-black mb-16
      md:h-[240px] md:mb-[7.5rem] lg:mb-40"
    >
      <h1 className="heading--product text-white">{props.heading}</h1>
    </div>
  );
};

export default CategoryHeading;
