import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.userMenu}>
      <h3>Welcome, ANONYMOUS</h3>
      <button type="submit">Logout</button>
    </div>
  );
};

export default UserMenu;
