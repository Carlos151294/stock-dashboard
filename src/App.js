import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, Paper } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import ROUTES from './pages';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
// Components
import Header from './components/Header';
import Spinner from './components/Spinner';
// Store
import { checkUserSession } from './store/actions/auth';
import { selectAuth } from './store/selectors/auth';
import { selectTheme } from './store/selectors/ipc';
// Styles
import { darkTheme, lightTheme } from './styles/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    }
  },
}));

function App() {
  const isDark = useSelector(selectTheme);
  const { user, loading } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const appliedTheme = createTheme(isDark ? darkTheme : lightTheme);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {loading ? (
        <Spinner fullScreen />
      ) : (
        <Paper className={classes.container} square>
          <Header />
          <Switch>
            <Route
              exact
              path={ROUTES.HOME}
              render={() =>
                user ? <HomePage /> : <Redirect to={ROUTES.LOGIN} />
              }
            />
            <Route
              path={ROUTES.LOGIN}
              render={() =>
                !user ? <LoginPage /> : <Redirect to={ROUTES.HOME} />
              }
            />
            <Route path={ROUTES.CONTACT} component={ContactPage} />
            <Route render={() => <Redirect to={ROUTES.HOME} />} />
          </Switch>
        </Paper>
      )}
    </ThemeProvider>
  );
}

export default App;
