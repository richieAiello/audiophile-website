import NewText from '../../shared-components/NewText';
import SeeProductBtn from '../../shared-components/SeeProductBtn';
import HeroImage from './HeroImage';

const Hero = props => {
  return (
    <section className="relative h-[510px] w-full bg-hero-black mb-[5.75rem] md:h-[600px] md:mb-[9.25rem]">
      <div
        className="container flex flex-col items-center relative z-10 text-center text-white pt-[6.75rem] 
        md:pt-[8.5rem]"
      >
        <NewText hero />
        <h1 className="heading--large mt-4 mb-6 md:mt-6">
          XX99 Mark II Headphones
        </h1>
        <p className="opacity-75 mb-[1.75rem] md:mb-10 md:max-w-[308px]">
          Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <SeeProductBtn path="xx99-mark-two-headphones" orange />
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
