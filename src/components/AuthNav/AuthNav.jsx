import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import '../App.css';

const buildLinkClass = ({ isActive }) => {
  return clsx('link', isActive && 'active');
};

const AuthNav = () => {
  return (
    <div className="subNav">
      <NavLink className={buildLinkClass}>Register</NavLink>
      <NavLink className={buildLinkClass}>Log In</NavLink>
    </div>
  );
};

export default AuthNav;
