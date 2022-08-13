import NewText from '../../shared-components/NewText';
import SeeProductBtn from '../../shared-components/SeeProductBtn';

const Hero = props => {
  return (
    <section className="h-[510px] w-full bg-hero-black mb-[5.75rem] md:mb-[9.25rem] md:h-[640px] lg:mb-[12.5rem]">
      <div
        className="container--hero bg-[url(./assets/home/hero-small.jpg)]
        bg-[center_top_-3.5rem] bg-no-repeat bg-[length:600px] 
        md:bg-[length:800px] md:bg-[center_top_-5.5rem] 
        lg:bg-[length:1600px] lg:bg-[right_-10rem_bottom_-2.5rem] lg:bg-[url(./assets/home/hero.jpg)]
        lg:overflow-x-visible"
      >
        <div
          className="flex flex-col items-center max-w-[320px] mx-auto relative z-10 text-center text-white pt-[6.75rem]
          md:pt-[8.5rem] lg:text-left lg:items-start lg:mx-0"
        >
          <NewText hero />
          <h1 className="heading--large mt-4 mb-6 md:mt-6">
            XX99 Mark II Headphones
          </h1>
          <p className="opacity-75 mb-[1.75rem] md:mb-10">
            Experience natural, lifelike audio and exceptional build
            quality made for the passionate music enthusiast.
          </p>
          <SeeProductBtn path="xx99-mark-two-headphones" orange />
        </div>
      </div>
    </section>
  );
};

export default Hero;
