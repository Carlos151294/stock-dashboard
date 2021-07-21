import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../../assets/login-background.jpeg'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    backgroundImage: `url(${BackgroundImage})`, 
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: '2rem',
  },
  titleContainer: {
    width: '29rem',
  },
  loginButton: {
    backgroundColor: theme.palette.primary.contrastText
  },
}));

export default useStyles;
