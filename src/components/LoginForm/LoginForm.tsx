import { Link } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm: React.FC = () => {
  return (
    <div style={{ margin: "100px auto" }}>
      <h2>Sign in</h2>
      <p>Welcome back</p>
      <form action="#" method="post">
        <Input
          type="text"
          label="User name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="password"
          label="Password"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Button buttonText="Sign In" />
      </form>
      <p>OR</p>
      <p>
        Don't have account? <Link to="/registration">Sign in</Link>
      </p>
    </div>
  );
};

export default LoginForm;
