const CategoryHeading = props => {
  return (
    <div className="flex justify-center items-center h-[102px] bg-hero-black mb-16">
      <h1 className="heading--product text-white">{props.heading}</h1>
    </div>
  );
};

export default CategoryHeading;
