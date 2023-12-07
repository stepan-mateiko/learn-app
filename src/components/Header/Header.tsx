import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/training">Training</Link>
        <Link to="/join-us">Join Us</Link>
        <Link to="/my-account">My Account</Link>
        <Link to="/change-password">Change Password</Link>
      </nav>
    </header>
  );
};

export default Header;
