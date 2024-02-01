import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { navigationLinks } from "../../constants/navigationLinks";
import { RootState } from "../../store";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import MiniProfile from "../MiniProfile/MiniProfile";
import ProfilePic from "../../assets/images/student-profile-img.png";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isMiniProfile, setIsMiniProfile] = useState<boolean>(false);

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

      <Navigation links={navigationLinks.HEADER_LINKS} />
      {!user.userName && (
        <div>
          <Button buttonText="Sign In" isLink={true} path={RoutePaths.LOGIN} />
          <Button
            buttonText="Join Us"
            isLink={true}
            path={RoutePaths.JOIN_US}
          />
        </div>
      )}
      {!isMiniProfile && user.userName && (
        <div onClick={showMiniProfile}>
          {user.userName}{" "}
          <img src={ProfilePic} alt={`${user.userName}'s profile`} width={50} />
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
