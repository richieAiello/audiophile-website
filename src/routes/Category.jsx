import { Outlet } from 'react-router-dom';
import CategoryNav from '../components/shared-components/CategoryNav';
import BestGear from '../components/shared-components/BestGear';

const Category = props => {
  return (
    <main className="mt-[150px]">
      <div className="grid gap-y-[7.5rem] mb-[10.75rem]">
        <Outlet />
      </div>
      <CategoryNav />
      <BestGear />
    </main>
  );
};

export default Category;
