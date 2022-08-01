import NavItem from './NavItem';

const NavMenu = props => {
  return (
    <ul>
      <NavItem path="/" text="Home" />
      {/* <NavItem path="" text="" />
      <NavItem path="" text="" />
      <NavItem path="" text="" /> */}
    </ul>
  );
};

export default NavMenu;
