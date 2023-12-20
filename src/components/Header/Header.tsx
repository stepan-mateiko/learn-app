import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import RoutePaths from "../../constants/routes";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import MiniProfile from "../MiniProfile/MiniProfile";
import ProfilePic from "../../assets/images/student-profile-img.png";

interface User {
  userName: string;
  email: string;
}

const Header: React.FC = () => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}") as User;
  const [isMiniProfile, setIsMiniProfile] = useState<boolean>(false);
  const navigationLinks = [
    { to: RoutePaths.TRAINING, label: "Training" },
    { to: RoutePaths.MY_ACCOUNT, label: "My Account" },
  ];
  const [storedToken, setStoredToken] = useState<string>("");

  useEffect(() => {
    setStoredToken(localStorage.getItem("token") || "");
  }, [storedToken]);

  const showMiniProfile = () => {
    setIsMiniProfile(true);
  };

  const hideMiniProfile = () => {
    setIsMiniProfile(false);
  };

  return (
    <header className="header">
      <Link to={RoutePaths.HOME}>
        <Logo />
      </Link>

      <Navigation links={navigationLinks} />
      {!storedToken && (
        <div>
          <Button buttonText="Sign In" isLink={true} path={RoutePaths.LOGIN} />
          <Button
            buttonText="Join Us"
            isLink={true}
            path={RoutePaths.JOIN_US}
          />
        </div>
      )}
      {!isMiniProfile && storedToken && (
        <div onClick={showMiniProfile}>
          {storedUser.userName}{" "}
          <img
            src={ProfilePic}
            alt={`${storedUser.userName}'s profile`}
            width={50}
          />
        </div>
      )}
      {isMiniProfile && (
        <MiniProfile
          name={storedUser.userName}
          email={storedUser.email}
          isMiniProfile={isMiniProfile}
          hideMiniProfile={hideMiniProfile}
        />
      )}
    </header>
  );
};

export default Header;
