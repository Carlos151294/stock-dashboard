import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { selectUser } from '../../store/selectors/auth';
import { logout } from '../../store/actions/auth';
import Strings from '../../shared/constants/strings';
import ROUTES from '../../pages';
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
          <Box fontSize='h1.fontSize' className={classes.dflex}>
            <TrendingUpIcon className={classes.inheritHeight} />
          </Box>
          <Typography variant='h3' className={classes.navOption}>
            {Strings.HEADER.BRAND_NAME}
          </Typography>
        </Link>
      )}
      <div className={classes.navOptions}>
        <div className={classes.navOption}>
          <Link className={classes.link} to={ROUTES.CONTACT}>
            <Typography variant='h5'>{Strings.HEADER.CONTACT}</Typography>
          </Link>
        </div>
        {!user && (
          <div className={classes.navOption}>
            <Link className={classes.link} to={ROUTES.LOGIN}>
              <Typography variant='h5'>{Strings.HEADER.LOGIN}</Typography>
            </Link>
          </div>
        )}
        {user && (
          <div className={classes.navOption}>
            <div className={classes.cursor} onClick={handleLogout}>
              <Typography variant='h5'>{Strings.HEADER.LOGOUT}</Typography>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
