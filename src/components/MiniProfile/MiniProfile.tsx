import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";
import ProfilePic from "../../assets/images/student-profile-img.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/users/actions";
import { AccountIcon, SignOutIcon } from "../Icon/Icon";

interface MiniProfileProps {
  name: string;
  email: string | undefined;
  photo: string;
  isMiniProfile: boolean;
  hideMiniProfile: () => void;
}
const MiniProfile: React.FC<MiniProfileProps> = ({
  name,
  email,
  photo,
  hideMiniProfile,
}) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser() as any);
  };
  return (
    <div onClick={hideMiniProfile} className="header__miniProfile">
      <div className="header__miniProfile-header">
        <img src={photo ? photo : ProfilePic} alt="profile" width={50} />
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <Link to={RoutePaths.MY_ACCOUNT}>
        <AccountIcon />
        My Account
      </Link>
      <div className="header__miniProfile-footer">
        <Link to={RoutePaths.LOGIN} onClick={handleLogOut}>
          <SignOutIcon />
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default MiniProfile;
