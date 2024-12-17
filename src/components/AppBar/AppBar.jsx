import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
// import UserMenu from '../UserMenu/UserMenu';
import '../App.css';

const AppBar = () => {
  return (
    <header>
      <nav className="nav">
        <Navigation />
        <AuthNav />
        {/* <UserMenu /> */}
      </nav>
    </header>
  );
};

export default AppBar;
