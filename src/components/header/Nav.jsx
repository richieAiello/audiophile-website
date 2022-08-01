import { useState, useEffect } from 'react';
import Hamburger from './Hamburger';
import NavCardMenu from './NavCardMenu';
import NavMenu from './NavMenu';
import CartBtn from './CartBtn';
import Shadow from './Shadow';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import clsx from 'clsx';

const Nav = props => {
  const [navVisibility, setNavVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  // const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // animateIn && setAnimateIn(false);
      // animateOut && setAnimateOut(false);
      // !menuVisibility && setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [navVisibility, cartVisibility]);

  const handleHamburgerClick = e => {
    setLoading(true);
    setNavVisibility(!navVisibility);
    // hidden && setHidden(false);
    // menuVisibility ? setAnimateOut(true) : setAnimateIn(true);
  };

  const handleLinkClick = e => {
    if (window.innerWidth < 768) {
      handleHamburgerClick();
    }
  };

  return (
    <nav className="container flex justify-between items-center h-max">
      <Hamburger
        className={clsx({
          flip: navVisibility,
        })}
        onClick={handleHamburgerClick}
        disabled={loading}
      />
      {/* <NavCardMenu
        className={clsx({
          hidden: hidden,
          grid: !hidden,
          'slide-in': animateIn,
          'slide-out': animateOut,
        })}
        onClick={handleLinkClick}
      /> */}
      {/* <Shadow
        className={clsx({
          hidden: hidden,
          block: !hidden,
          'fade-in': animateIn,
          'fade-out': animateOut,
        })}
        onClick={handleHamburgerClick}
      /> */}
      <Logo className="" />
      <CartBtn />
      <NavCardMenu />
    </nav>
  );
};

export default Nav;
