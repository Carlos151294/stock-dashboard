import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import GoogleIcon from '../../components/Icons/GoogleIcon';
import { login } from '../../store/actions/auth';
import Strings from '../../shared/constants/strings';
import useStyles from './styles';

const LoginPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogin = () => dispatch(login());

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant='h1'>
          <Box color='white' fontStyle='italic' fontWeight={600}>
            {Strings.LOGIN.LOGIN_TITLE}
          </Box>
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.loginButton}
          variant='contained'
          onClick={handleLogin}
          startIcon={<GoogleIcon />}
        >
          {Strings.LOGIN.LOGIN_WITH_GOOGLE_CTA}
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
