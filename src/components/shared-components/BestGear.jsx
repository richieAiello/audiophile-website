const BestGear = props => {
  return (
    <section
      className={`
        mb-[7.5rem] lg:grid lg:grid-cols-[445px,540px] lg:grid-flow-col
        lg:justify-between lg:items-center lg:mb-40
        ${props.className} 
      `}
    >
      <picture className="lg:col-start-2">
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
          className="rounded-lg mb-10 h-[320px] w-screen object-cover object-top 
          md:mb-16 lg:h-[588px] lg:mb-0"
        />
      </picture>
      <div className="flex flex-col items-center text-center lg:text-left">
        <h2 className="heading--product max-w-[17ch] mb-8 md:max-w-[22ch]">
          Bringing you the <span className="text-orange">best </span>
          audio gear
        </h2>
        <p className="opacity-50 md:max-w-[573px]">
          Located at the heart of New York City, Audiophile is the
          premier store for high end headphones, earphones, speakers,
          and audio accessories. We have a large showroom and luxury
          demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestGear;
