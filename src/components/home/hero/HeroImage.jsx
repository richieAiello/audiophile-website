const HeroImage = props => {
  return (
    <picture>
      <source
        srcSet="/home/desktop/image-header.jpg"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="/home/tablet/image-header.jpg"
        media="(min-width: 768px)"
      />
      <img
        src="/home/mobile/image-header.jpg"
        alt=""
        className="absolute rounded-3xl z-0 mx-auto right-0 left-0 top-0 h-full w-[375px] object-cover object-bottom
        md:w-[689px] lg:w-auto lg:h-[100%] lg:bottom-0 lg:m-auto lg:left-[unset]"
      />
    </picture>
  );
};

export default HeroImage;
