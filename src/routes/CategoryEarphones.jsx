import CategoryHeading from '../components/category/CategoryHeading';
import CategoryWrapper from '../components/category/CategoryWrapper';
import CategoryCard from '../components/category/CategoryCard';

const CategoryEarphones = props => {
  return (
    <>
      <CategoryHeading heading="Earphones" />
      <CategoryWrapper>
        <CategoryCard slug="yx1-earphones" />
      </CategoryWrapper>
    </>
  );
};

export default CategoryEarphones;
