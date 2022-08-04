import { Outlet } from 'react-router-dom';
import CategoryNav from '../../components/shared-components/CategoryNav';
import BestGear from '../../components/shared-components/BestGear';

const Details = props => {
  return (
    <main className="mt-[6.625rem]">
      <Outlet />
      <CategoryNav />
      <BestGear />
    </main>
  );
};

export default Details;
