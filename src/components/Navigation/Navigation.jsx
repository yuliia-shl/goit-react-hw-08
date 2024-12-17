import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx('link', isActive && 'active');
};

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.subNav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </div>
        <div className={s.subNav}>
          <NavLink className={buildLinkClass}>Register</NavLink>
          <NavLink className={buildLinkClass}>Log In</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
