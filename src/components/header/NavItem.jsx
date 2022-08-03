import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <NavLink
        to={props.path}
        className="text-white uppercase font-bold text-[0.8125rem] tracking-[0.125rem] duration-[250ms] 
        hover:text-light-orange focus:text-light-orange"
        onClick={props.onClick}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavItem;
