import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div style={{ margin: "100px auto" }}>
      <h2>Sign in</h2>
      <p>Welcome back</p>
      <LoginForm />
      <p>OR</p>
      <p>
        Don't have account? <Link to={RoutePaths.JOIN_US}>Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
