import { useState, useEffect, useRef } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import ShoppingCart from './cart/ShoppingCart';
import ShoppingCartBtn from './cart/ShoppingCartBtn';
import Shadow from './Shadow';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import clsx from 'clsx';

const Nav = props => {
  const [navVisibility, setNavVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  const [hideCart, setHideCart] = useState(true);
  const [loading, setLoading] = useState(false);

  const desktop = useMediaQuery('(min-width: 1440px)');
  const shadowRef = useRef(null);

  useEffect(() => {
    if (desktop && !cartVisibility) {
      shadowRef.current.click();
    }
  }, [desktop]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      animateIn && setAnimateIn(false);
      animateOut && setAnimateOut(false);
      !navVisibility && setHideNav(true);
      !cartVisibility && setHideCart(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [navVisibility, cartVisibility]);

  const handleHamburgerClick = e => {
    cartVisibility && handleCartClick();
    setLoading(true);
    setNavVisibility(!navVisibility);
    hideNav && setHideNav(false);
    navVisibility ? setAnimateOut(true) : setAnimateIn(true);
  };

  const handleCartClick = e => {
    navVisibility && handleHamburgerClick();
    setLoading(true);
    setCartVisibility(!cartVisibility);
    hideCart && setHideCart(false);
    cartVisibility ? setAnimateOut(true) : setAnimateIn(true);
  };

  const handleLinkClick = e => {
    if (window.innerWidth < 1440) {
      handleHamburgerClick();
    }
  };

  const handleShadowClick = e => {
    navVisibility && handleHamburgerClick();
    cartVisibility && handleCartClick();
  };

  return (
    <nav className="container flex items-center lg:justify-between">
      <Hamburger
        className={clsx({
          flip: navVisibility,
        })}
        onClick={handleHamburgerClick}
        disabled={loading}
      />
      <Logo className="mx-auto md:ml-12 lg:mx-0" />
      <NavMenu
        className={clsx({
          hidden: hideNav,
          'slide-in':
            animateIn && navVisibility && window.innerWidth < 1440,
          'slide-out':
            animateOut && !navVisibility && window.innerWidth < 1440,
        })}
        onClick={handleLinkClick}
      />
      <Shadow
        className={clsx({
          hidden: hideNav && hideCart,
          'fade-in': animateIn && (hideCart || hideNav),
          'fade-out': animateOut && !navVisibility && !cartVisibility,
        })}
        onClick={handleShadowClick}
        ref={shadowRef}
      />
      <ShoppingCartBtn onClick={handleCartClick} disabled={loading} />
      <ShoppingCart
        className={clsx({
          hidden: hideCart,
          grid: !hideCart,
          'slide-up': animateIn && cartVisibility,
          'slide-down': animateOut && !cartVisibility,
        })}
        onClick={handleCartClick}
      />
    </nav>
  );
};

export default Nav;
