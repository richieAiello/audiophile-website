import { NavLink } from 'react-router-dom';

const FooterItem = props => {
  return (
    <li>
      <NavLink
        to={props.path}
        className="font-bold uppercase text-white text-[0.8125rem] tracking-[0.125rem]
        duration-[250ms] hover:text-orange focus:text-orange"
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default FooterItem;
