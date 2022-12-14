import { useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppContext';
import CategoryHeading from '../../components/category/CategoryHeading';
import CategoryWrapper from '../../components/category/CategoryWrapper';
import CategoryCard from '../../components/category/CategoryCard';

const CategoryOutlet = props => {
  const location = useLocation().pathname;
  const appData = useAppData();
  const categoryData = appData.filter(item => {
    return `/category/${item.category}` === location;
  });

  return (
    <>
      <CategoryHeading heading={categoryData[0].category} />
      <CategoryWrapper>
        {categoryData.map(item => {
          return <CategoryCard key={item.slug} slug={item.slug} />;
        })}
      </CategoryWrapper>
    </>
  );
};

export default CategoryOutlet;
