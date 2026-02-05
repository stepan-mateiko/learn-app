import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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

  const [isMiniProfile, setIsMiniProfile] = useState(false);
  const miniProfileRef = useRef<HTMLDivElement | null>(null);

  const showMiniProfile = () => setIsMiniProfile(true);
  const hideMiniProfile = () => setIsMiniProfile(false);

  useEffect(() => {
    if (!isMiniProfile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        miniProfileRef.current &&
        !miniProfileRef.current.contains(event.target as Node)
      ) {
        hideMiniProfile();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMiniProfile]);

  return (
    <header className="header">
      <Link className="header__logo" to={RoutePaths.HOME}>
        <Logo />
      </Link>

      <Navigation links={navigationLinks.HEADER_LINKS} />

      {!user.userName && isButtons && (
        <div>
          <Button
            buttonText="Sign In"
            isLink
            path={RoutePaths.LOGIN}
            classOfBtn="header__sign-"
          />
          <Button
            buttonText="Join Us"
            isLink
            path={RoutePaths.JOIN_US}
            classOfBtn="header__join-"
          />
        </div>
      )}

      {!isMiniProfile && user.userName && (
        <div className="header__box" onClick={showMiniProfile}>
          {user.userName}
          <img
            src={user.photo || ProfilePic}
            alt={`${user.userName}'s profile`}
            width={50}
          />
        </div>
      )}

      {isMiniProfile && (
        <div ref={miniProfileRef}>
          <MiniProfile
            name={user.userName}
            email={user.email}
            photo={user.photo}
            hideMiniProfile={hideMiniProfile}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
