import SeeProductBtn from '../../shared-components/SeeProductBtn';

const ShowcaseYx1 = props => {
  return (
    <section
      className="grid gap-y-6 md:grid-flow-col md:gap-x-3 
      md:grid-rows-[320px] md:grid-cols-[1fr,1fr] lg:gap-x-8"
    >
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="/home/desktop/image-earphones-yx1.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/tablet/image-earphones-yx1.jpg"
        />
        <img
          src="/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="h-[200px] w-full object-cover rounded-lg md:h-full"
        />
      </picture>
      <div
        className="flex flex-col items-start justify-center pl-6 h-[200px] bg-grey rounded-lg 
        md:h-full md:pl-10 lg:pl-24"
      >
        <h2 className="heading--wide text-black mb-8">
          Yx1 Earphones
        </h2>
        <SeeProductBtn path="yx1-earphones" clear />
      </div>
    </section>
  );
};

export default ShowcaseYx1;
