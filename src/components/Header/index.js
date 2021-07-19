import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import { selectUser } from '../../store/selectors/auth';
import { logout } from '../../store/actions/auth';
import ROUTES from '../../pages';
import Strings from '../../shared/constants/strings';
import useStyles from './styles.js';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogout = () => dispatch(logout());

  return (
    <header className={classes.headerContainer}>
      {user && (
        <Link className={`${classes.brand} ${classes.link}`} to={ROUTES.HOME}>
          <TrendingUpIcon />
          <div className={`${classes.brandname} ${classes.navOption}`}>{Strings.HEADER.BRAND_NAME}</div>
        </Link>
      )}
      <div className={classes.navOptions}>
        <div className={classes.navOption}>
          <Link className={classes.link} to={ROUTES.CONTACT}>
            {Strings.HEADER.CONTACT}
          </Link>
        </div>
        {!user && (
          <div className={classes.navOption}>
            <Link className={classes.link} to={ROUTES.LOGIN}>
              {Strings.HEADER.LOGIN}
            </Link>
          </div>
        )}
        {user && (
          <div className={classes.navOption}>
            <div className={classes.cursor} onClick={handleLogout}>
              {Strings.HEADER.LOGOUT}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
