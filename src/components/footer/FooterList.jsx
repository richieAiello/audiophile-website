import FooterItem from './FooterItem';

const FooterList = props => {
  return (
    <ul
      className="grid gap-y-4 md:grid-flow-col md:row-start-2 md:gap-x-8 md:w-max 
      lg:row-start-[unset] lg:justify-self-end"
    >
      <FooterItem path="/" text="Home" />
      <FooterItem path="/category/headphones" text="Headphones" />
      <FooterItem path="/category/speakers" text="Speakers" />
      <FooterItem path="/category/earphones" text="Earphones" />
    </ul>
  );
};

export default FooterList;
