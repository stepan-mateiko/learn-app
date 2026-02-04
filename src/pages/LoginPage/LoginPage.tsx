import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";

import LoginForm from "../../components/LoginForm/LoginForm";
import { LOGIN_PAGE } from "../../constants/text-constants";

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h2>{LOGIN_PAGE.heading}</h2>
        <p>{LOGIN_PAGE.welcome}</p>
      </div>

      <LoginForm />
      <div className="login__footer">
        <p>OR</p>
        <p>
          {LOGIN_PAGE.question}{" "}
          <Link to={RoutePaths.JOIN_US}>{LOGIN_PAGE.signUp}</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
