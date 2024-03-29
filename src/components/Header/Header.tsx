import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import RoutePaths, { pathsWithoutButtons } from "../../constants/routes";
import { navigationLinks } from "../../constants/navigationLinks";

import { RootState } from "../../store";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import MiniProfile from "../MiniProfile/MiniProfile";
import ProfilePic from "../../assets/images/student-profile-img.png";

const Header: React.FC = () => {
  const page = useLocation().pathname;
  const isButtons = !pathsWithoutButtons.includes(page);
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
      {!user.userName && isButtons && (
        <div>
          <Button
            buttonText="Sign In"
            isLink={true}
            path={RoutePaths.LOGIN}
            classOfBtn="header__sign-"
          />
          <Button
            buttonText="Join Us"
            isLink={true}
            path={RoutePaths.JOIN_US}
            classOfBtn="header__join-"
          />
        </div>
      )}
      {!isMiniProfile && user.userName && (
        <div className="header__box" onClick={showMiniProfile}>
          {user.userName}{" "}
          <img
            src={user.photo ? user.photo : ProfilePic}
            alt={`${user.userName}'s profile`}
            width={50}
          />
        </div>
      )}
      {isMiniProfile && (
        <MiniProfile
          name={user.userName}
          email={user.email}
          photo={user.photo}
          isMiniProfile={isMiniProfile}
          hideMiniProfile={hideMiniProfile}
        />
      )}
    </header>
  );
};

export default Header;
