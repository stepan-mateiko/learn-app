import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

const Header: React.FC = () => {
  const navigationLinks = [
    { to: "/registration", label: "Registration" },
    { to: "/my-account/trainings", label: "Training" },
    { to: "/my-account", label: "My Account" },
    { to: "/change-password", label: "Change Password" },
    { to: "/registration/verification", label: "Registration Verification" },
  ];
  return (
    <header style={{ display: "flex", marginBottom: 200 }}>
      <Link to={"/home"}>
        {" "}
        <Logo />
      </Link>

      <Navigation links={navigationLinks} />
      <div>
        <Button buttonText="Sign In" isLink={true} path="login" />
        <Button buttonText="Join Us" isLink={true} path="join-us" />
      </div>
    </header>
  );
};

export default Header;
