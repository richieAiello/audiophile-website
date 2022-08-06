import { Outlet } from 'react-router-dom';
import BackBtn from '../../components/shared-components/BackBtn';
import CategoryNav from '../../components/shared-components/CategoryNav';
import BestGear from '../../components/shared-components/BestGear';

const Details = props => {
  return (
    <main className="container text-black mt-[6.625rem]">
      <BackBtn />
      <Outlet />
      <CategoryNav />
      <BestGear />
    </main>
  );
};

export default Details;
