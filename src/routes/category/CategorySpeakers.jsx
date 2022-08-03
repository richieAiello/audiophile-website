import CategoryHeading from '../../components/category/CategoryHeading';
import CategoryWrapper from '../../components/category/CategoryWrapper';
import CategoryCard from '../../components/category/CategoryCard';

const CategorySpeakers = props => {
  return (
    <>
      <CategoryHeading heading="speakers" />
      <CategoryWrapper>
        <CategoryCard slug="zx9-speaker" />
        <CategoryCard slug="zx7-speaker" />
      </CategoryWrapper>
    </>
  );
};

export default CategorySpeakers;
