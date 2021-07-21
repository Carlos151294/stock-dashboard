import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Navigation
import AppNavigation from './pages/AppNavigation';

// Store
import { checkUserSession } from './store/actions/auth';
import { selectAuthLoading } from './store/selectors/auth';
import { selectTheme } from './store/selectors/ipc';

// Styles
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector(selectTheme);
  const loading = useSelector(selectAuthLoading);
  const appliedTheme = createTheme(isDark ? darkTheme : lightTheme);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <AppNavigation loading={loading} />
    </ThemeProvider>
  );
}

export default App;
