import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed flex items-center bg-light-black w-full h-[5.625rem]">
      <Nav />
    </header>
  );
};

export default Header;
