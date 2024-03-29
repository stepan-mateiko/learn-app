import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import RoutePaths from "../../constants/routes";
import { MiniProfileProps } from "../../constants/props";

import ProfilePic from "../../assets/images/student-profile-img.png";
import { AccountIcon, SignOutIcon } from "../Icon/Icon";

import { logOutUserAsync } from "../../store/users/thunk";

const MiniProfile: React.FC<MiniProfileProps> = ({
  name,
  email,
  photo,
  hideMiniProfile,
}) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") || "";
  const handleLogOut = () => {
    dispatch(logOutUserAsync(token) as any);
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
