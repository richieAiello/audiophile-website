import SeeProductBtn from '../../shared-components/SeeProductBtn';

const ShowcaseZx7 = props => {
  return (
    <section className="relative h-[320px] pl-6 flex flex-col justify-center items-start">
      <h2 className="heading--wide text-black mb-8">Zx7 Speaker</h2>
      <SeeProductBtn path="zx7-speaker" clear />
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/tablet/image-speaker-zx7.jpg"
        />
        <img
          src="/home/mobile/image-speaker-zx7.jpg"
          alt=""
          className="absolute -z-10 h-full w-full top-0 left-0 rounded-lg"
        />
      </picture>
    </section>
  );
};

export default ShowcaseZx7;
