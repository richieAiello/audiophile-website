import CategoryCard from './CategoryCard';

const CategoryNav = props => {
  return (
    <div className="container grid gap-y-[4.25rem]">
      <CategoryCard path="/" image="headphones" text="headphones" />
      <CategoryCard path="/" image="headphones" text="headphones" />
      <CategoryCard path="/" image="headphones" text="headphones" />
    </div>
  );
};

export default CategoryNav;
