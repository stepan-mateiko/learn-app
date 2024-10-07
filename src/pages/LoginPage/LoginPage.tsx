import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h2>Sign in</h2>
        <p>Welcome back</p>
      </div>

      <LoginForm />
      <div className="login__footer">
        <p>OR</p>
        <p>
          Don't have account? <Link to={RoutePaths.JOIN_US}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
