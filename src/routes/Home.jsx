import Hero from '../components/home/hero/Hero';
import CategoryNav from '../components/shared-components/CategoryNav';
import Showcase from '../components/home/showcase/Showcase';

const Home = props => {
  return (
    <main className="mt-[5.625rem]">
      <Hero />
      <CategoryNav />
      <Showcase />
    </main>
  );
};

export default Home;
