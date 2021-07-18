import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
// Components
import Header from './components/Header';
import Spinner from './components/Spinner';
// Store
import { checkUserSession } from './store/actions/auth';
import { selectAuth } from './store/selectors/auth';
// Styles
import './App.css';

function App() {
  const { user, loading } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line
  }, []);

  // if (loading) return <Spinner fullScreen/>;

  return (
    // <HomePage />
    <div className='app-container'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => user ? (<HomePage />) : (<Redirect to='/login' />)} />
        <Route path='/login' render={() => !user ? (<LoginPage />) : (<Redirect to='/' />)} />
        <Route path='/contact' component={ContactPage} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
}

export default App;
