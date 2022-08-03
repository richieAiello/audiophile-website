import { Outlet } from 'react-router-dom';
import CategoryNav from '../components/shared-components/CategoryNav';

const Category = props => {
  return (
    <main className="mt-[150px]">
      <Outlet />
      <CategoryNav />
    </main>
  );
};

export default Category;
