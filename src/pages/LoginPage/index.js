import { useDispatch } from 'react-redux';

import { login } from '../../store/actions/auth';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => dispatch(login());

  return (
    <div>
      <div>LoginPage</div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;