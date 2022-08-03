import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed z-50 flex top-0 left-0 items-center bg-hero-black w-full h-[5.625rem]">
      <Nav />
    </header>
  );
};

export default Header;
