import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import ROUTES from '../';
import { Container } from '../../App.test';
import AppNavigation from './';
import Strings from '../../shared/constants/strings';

const AUTH_STATE = {
  auth: {
    user: {
      email: 'carlos.flores.nava94@gmail.com',
      fullName: 'CARLOS FLORES',
      picture: 'https://lh3.googleusercontent.com/a/AATXAJw4k0SPe6a58A9LNbGOkvi-WAMXcxqNOGM-v8r4=s96-c',
      uid: 'ibfPGgAw0mh0t9NLv28zieI2SgD2'
    },
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

it('renders Spinner Component when Authentication is loading', () => {
  render(
    <Container>
      <AppNavigation loading={true} />
    </Container>
  );

  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});

it('rendirects to Login Page when navigating to "/" route AND user is NOT authenticated', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.HOME);

  render(
    <Container>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.LOGIN.LOGIN_TITLE)).toBeInTheDocument();
});

it('rendirects to Login Page when navigating to an INVALID route AND user is NOT authenticated', () => {
  const history = createMemoryHistory();
  history.push('/some/invalid/route');

  render(
    <Container>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.LOGIN.LOGIN_TITLE)).toBeInTheDocument();
});

it('renders Login Page when navigating to "/login" route AND user is NOT authenticated', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.LOGIN);

  render(
    <Container>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.LOGIN.LOGIN_TITLE)).toBeInTheDocument();
});

it('renders Home Page when navigating to "/" route AND user is authenticated', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.HOME);

  render(
    <Container store={AUTH_STATE}>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.HEADER.BRAND_NAME)).toBeInTheDocument();
});

it('rendirects to Home Page when navigating to "/login" route AND user is authenticated', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.LOGIN);

  render(
    <Container store={AUTH_STATE}>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.HEADER.BRAND_NAME)).toBeInTheDocument();
});

it('renders Contact Page when navigating to "/contact" route AND user is authenticated', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.CONTACT);

  render(
    <Container store={AUTH_STATE}>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.CONTACT.AUTHOR_COPYRIGHT)).toBeInTheDocument();
});

it('rendirects to Home Page when navigating to a nonexistent route AND user is authenticated', () => {
  const history = createMemoryHistory();
  history.push('/some/invalid/route');

  render(
    <Container store={AUTH_STATE}>
      <Router history={history}>
        <AppNavigation loading={false} />
      </Router>
    </Container>
  );

  expect(screen.getByText(Strings.HEADER.BRAND_NAME)).toBeInTheDocument();
});
