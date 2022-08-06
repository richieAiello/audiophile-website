import CategoryHeading from '../../components/category/CategoryHeading';
import CategoryWrapper from '../../components/category/CategoryWrapper';
import CategoryCard from '../../components/category/CategoryCard';

// Map through data to create category cards
const CategoryHeadphones = props => {
  return (
    <>
      <CategoryHeading heading="headphones" />
      <CategoryWrapper>
        <CategoryCard slug="xx99-mark-two-headphones" />
        <CategoryCard slug="xx99-mark-one-headphones" />
        <CategoryCard slug="xx59-headphones" />
      </CategoryWrapper>
    </>
  );
};

export default CategoryHeadphones;
