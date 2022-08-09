import Hero from '../components/home/hero/Hero';
import CategoryNav from '../components/shared-components/CategoryNav';
import Showcase from '../components/home/showcase/Showcase';
import BestGear from '../components/shared-components/BestGear';

const Home = props => {
  return (
    <main className="mt-[5.625rem]">
      <Hero />
      <CategoryNav className="container" />
      <Showcase />
      <BestGear className="container" />
    </main>
  );
};

export default Home;
