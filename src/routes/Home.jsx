import Hero from '../components/home/hero/Hero';
import CategoryNav from '../components/shared-components/CategoryNav';

const Home = props => {
  return (
    <main className="mt-[5.625rem]">
      <Hero />
      <CategoryNav />
    </main>
  );
};

export default Home;
