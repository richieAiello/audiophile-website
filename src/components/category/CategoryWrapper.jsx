const CategoryWrapper = props => {
  return (
    <div className="grid gap-y-[7.5rem] mb-[10.75rem]">
      {props.children}
    </div>
  );
};

export default CategoryWrapper;
