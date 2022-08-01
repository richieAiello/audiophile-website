import { Link } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <Link to={props.path} className="text-[0.8125rem] ">
        {props.text}
      </Link>
    </li>
  );
};

export default NavItem;
