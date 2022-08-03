const BestGear = props => {
  return (
    <section className="container flex flex-col items-center text-center mb-[7.5rem]">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="/shared-images/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/shared-images/tablet/image-best-gear.jpg"
        />
        <img
          src="/shared-images/mobile/image-best-gear.jpg"
          alt=""
          className="rounded-lg mb-10 h-[320px] w-screen object-cover object-top"
        />
      </picture>
      <h2
        className="font-bold text-[1.75rem] leading-[2.375rem] tracking-[0.0625rem] 
        uppercase max-w-[17ch] mb-8"
      >
        Bringing you the <span className="text-orange">best </span>
        audio gear
      </h2>
      <p className="opacity-50">
        Located at the heart of New York City, Audiophile is the
        premier store for high end headphones, earphones, speakers,
        and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience
        a wide range of our products. Stop by our store to meet some
        of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </section>
  );
};

export default BestGear;
