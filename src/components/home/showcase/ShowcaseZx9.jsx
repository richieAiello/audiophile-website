import SeeProductBtn from '../../shared-components/SeeProductBtn';

const ShowcaseZx9 = props => {
  return (
    <section
      className="relative h-[600px] bg-orange rounded-lg bg-[url(./assets/circles.svg)]
      px-4 bg-[center_top_-7.5rem] bg-no-repeat bg-[length:558px] md:h-[720px] md:bg-[length:944px]
      md:bg-[center_top_-18rem]"
    >
      <div className="flex flex-col items-center text-white pt-[18.375rem] text-center md:pt-[22.0625rem]">
        <h2 className="heading--large max-w-[7ch] mb-6">
          Zx9 Speaker
        </h2>
        <p className="mb-6 opacity-75 max-w-[280px] md:max-w-[350px] md:mb-10">
          Upgrade to premium speakers that are phenomenally built to
          deliver truly remarkable sound.
        </p>
        <SeeProductBtn path="zx9-speaker" black />
      </div>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="/home/desktop/image-speaker-zx9.png"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/tablet/image-speaker-zx9.png"
        />
        <img
          src="/home/mobile/image-speaker-zx9.png"
          alt=""
          className="w-[172.25px] absolute left-0 right-0 mx-auto top-[55px]"
        />
      </picture>
    </section>
  );
};

export default ShowcaseZx9;
