const CategoryWrapper = props => {
  return (
    <div className="grid gap-y-[7.5rem] mb-[10.75rem] lg:gap-y-40 lg:mb-60">
      {props.children}
    </div>
  );
};

export default CategoryWrapper;
