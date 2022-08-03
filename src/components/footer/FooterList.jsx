import FooterItem from './FooterItem';

const FooterList = props => {
  return (
    <ul className="grid gap-y-4">
      <FooterItem path="/" text="Home" />
      <FooterItem path="/category/headphones" text="Headphones" />
      <FooterItem path="/category/speakers" text="Speakers" />
      <FooterItem path="/category/earphones" text="Earphones" />
    </ul>
  );
};

export default FooterList;
