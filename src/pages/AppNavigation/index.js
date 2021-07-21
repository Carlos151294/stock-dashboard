import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

// Pages
import ROUTES from '../';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ContactPage from '../ContactPage';

// Components
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

// Store
import { selectUser } from '../../store/selectors/auth';

// Styles
import useStyles from './styles';

const AppNavigation = ({ loading }) => {
  const user = useSelector(selectUser);
  const classes = useStyles();
  
  if (loading) return <Spinner fullScreen />;

  if (!user) return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LoginPage} />
      <Route render={() => <Redirect to={ROUTES.HOME} />} />
    </Switch>
  );

  return (
    <Paper className={classes.container} square>
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
        <Route render={() => <Redirect to={ROUTES.HOME} />} />
      </Switch>
    </Paper>
  );
};

export default AppNavigation;