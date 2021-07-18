import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUser } from '../../store/selectors/auth';
import { logout } from '../../store/actions/auth';
import logo from '../../assets/logo.png';
import './styles.css';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <header className="header-container">
      <Link className="brand" to="/">
        <img className="logo" src={logo} alt="LOGO" />
        <div className="brandname nav-option">IPC</div>
      </Link>
      <div className="nav-options">
        <div className="nav-option">
          <Link to="contact">Contact</Link>
        </div>
        {!user && (
          <div className="nav-option">
            <Link to="login">Login</Link>
          </div>
        )}
        {user && (
          <div className="nav-option">
            <div className="cursor" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
