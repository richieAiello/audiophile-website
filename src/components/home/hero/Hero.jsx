import NewText from '../../shared-components/NewText';
import SeeProduct from '../../shared-components/SeeProduct';
import HeroImage from './HeroImage';

const Hero = props => {
  return (
    <section className="relative h-[510px] w-full bg-hero-black mb-[5.75rem]">
      <div className="container relative z-10 text-center text-white pt-[6.75rem]">
        <NewText hero />
        <h1 className="heading--large mt-4 mb-6">
          XX99 Mark II Headphones
        </h1>
        <p className="opacity-75 mb-[1.75rem]">
          Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <SeeProduct orange />
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
