import ShowcaseZx9 from './ShowcaseZx9';
import ShowcaseZx7 from './ShowcaseZx7';
import ShowcaseYx1 from './ShowcaseYx1';

const Showcase = props => {
  return (
    <div className="container grid gap-y-6 mb-[7.5rem] md:gap-y-8 md:mb-24">
      <ShowcaseZx9 />
      <ShowcaseZx7 />
      <ShowcaseYx1 />
    </div>
  );
};

export default Showcase;
