import CategoryNavCard from './CategoryNavCard';

const CategoryNav = props => {
  return (
    <div
      className={`
        grid gap-y-[4.25rem] mb-[7.5rem] cursor-pointer
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
