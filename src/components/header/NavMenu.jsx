import NavItem from './NavItem';

const NavMenu = props => {
  return (
    <div
      className={`
        bg-hero-black absolute z-10 top-[5.625rem] left-0 h-max w-screen
        ${props.className}
        lg:block lg:static lg:w-max lg:ml-[12.5rem]
      `}
    >
      <ul
        className="mx-auto w-[min(100%-3rem,375px)] py-12 grid gap-y-4 md:w-[689px]
        lg:grid-flow-col lg:p-0 lg:w-max lg:gap-x-10"
      >
        <NavItem path="/" text="Home" onClick={props.onClick} />
        <NavItem
          path="category/headphones"
          text="Headphones"
          onClick={props.onClick}
        />
        <NavItem
          path="category/speakers"
          text="Speakers"
          onClick={props.onClick}
        />
        <NavItem
          path="category/earphones"
          text="Earphones"
          onClick={props.onClick}
        />
      </ul>
    </div>
  );
};

export default NavMenu;
