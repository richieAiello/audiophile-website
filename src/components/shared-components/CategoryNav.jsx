import CategoryCard from './CategoryCard';

const CategoryNav = props => {
  return (
    <div className="container grid gap-y-[4.25rem] mb-[7.5rem] cursor-pointer">
      <CategoryCard mod="headphones" />
      <CategoryCard mod="speakers" />
      <CategoryCard mod="earphones" />
    </div>
  );
};

export default CategoryNav;
