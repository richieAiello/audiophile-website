import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const FooterIcons = props => {
  return (
    <ul
      className="grid grid-flow-col gap-x-4 justify-self-center items-center 
      md:justify-self-end md:self-end lg:row-start-2 lg:col-start-2"
    >
      <li>
        <a
          href="#"
          aria-label="Visit Audiophile's Facebook."
          className="social-link"
        >
          <Facebook className="social-link__icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Visit Audiophile's Twitter."
          className="social-link"
        >
          <Twitter className="social-link__icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Visit Audiophile's Instagram."
          className="social-link"
        >
          <Instagram className="social-link__icon" />
        </a>
      </li>
    </ul>
  );
};

export default FooterIcons;
