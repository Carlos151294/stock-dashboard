import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import App from './App';

const middlewares = [];
export const mockStore = configureStore(middlewares);

export const initialState = {
  auth: {
    user: null,
    error: null,
    loading: true,
  },
  ipc: {
    history: [],
    isDark: false,
    error: null,
    loading: false,
  },
};

export const Container = ({ children, store }) => {
  const mockedStore = mockStore(store ?? initialState);

  return (
    <Provider store={mockedStore}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

it('renders App component', () => {
  render(
    <Container>
      <App />
    </Container>
  );
});
