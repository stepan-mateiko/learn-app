import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import MiniProfile from "../MiniProfile/MiniProfile";
import ProfilePic from "../../assets/images/student-profile-img.png";

const Header: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [isMiniProfile, setIsMiniProfile] = useState<boolean>(false);
  const navigationLinks = [
    { to: "/my-account/trainings", label: "Training" },
    { to: "/my-account", label: "My Account" },
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
    <header style={{ display: "flex", marginBottom: 200 }}>
      <Link to={"/home"}>
        <Logo />
      </Link>

      <Navigation links={navigationLinks} />
      {!storedToken && (
        <div>
          <Button buttonText="Sign In" isLink={true} path="login" />
          <Button buttonText="Join Us" isLink={true} path="join-us" />
        </div>
      )}
      {!isMiniProfile && storedToken && (
        <div onClick={showMiniProfile}>
          {user.userName} <img src={ProfilePic} alt="profile" width={50} />
        </div>
      )}
      {isMiniProfile && (
        <MiniProfile
          name={user.userName}
          email={user.email}
          isMiniProfile={isMiniProfile}
          hideMiniProfile={hideMiniProfile}
        />
      )}
    </header>
  );
};

export default Header;
