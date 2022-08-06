import { Outlet } from 'react-router-dom';
import CategoryNav from '../../components/shared-components/CategoryNav';
import BestGear from '../../components/shared-components/BestGear';

const Category = props => {
  return (
    <main className="mt-[90px]">
      <Outlet />
      <CategoryNav className="container" />
      <BestGear className="container" />
    </main>
  );
};

export default Category;
