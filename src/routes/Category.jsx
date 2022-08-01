import { Outlet } from 'react-router-dom';
import CategoryNav from '../components/shared/CategoryNav';

const Category = props => {
  return (
    <main>
      <Outlet />
      <CategoryNav />
    </main>
  );
};

export default Category;
