import CategoryNavCard from './CategoryNavCard';

const CategoryNav = props => {
  return (
    <div
      className={`
        grid gap-y-[4.25rem] mb-[7.5rem] cursor-pointer
        md:grid-flow-col md:gap-x-[0.625rem] lg:gap-x-[1.875rem] lg:mb-40
        ${props.className}
      `}
    >
      <CategoryNavCard mod="headphones" />
      <CategoryNavCard mod="speakers" />
      <CategoryNavCard mod="earphones" />
    </div>
  );
};

export default CategoryNav;
