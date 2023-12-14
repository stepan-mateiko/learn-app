import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

const Header: React.FC = () => {
  const navigationLinks = [
    { to: "/home", label: "Home" },
    { to: "/login", label: "Login" },
    { to: "/registration", label: "Registration" },
    { to: "/my-account/trainings", label: "Training" },
    { to: "/join-us", label: "Join Us" },
    { to: "/my-account", label: "My Account" },
    { to: "/change-password", label: "Change Password" },
    { to: "/registration/verification", label: "Registration Verification" },
  ];
  return (
    <header style={{ display: "flex", marginBottom: 200 }}>
      <Logo />
      <Navigation links={navigationLinks} />
      <div>
        <Button buttonText="Sign In" /> <Button buttonText="Join Us" />
      </div>
    </header>
  );
};

export default Header;
