import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";
import ProfilePic from "../../assets/images/student-profile-img.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/users/actions";

interface MiniProfileProps {
  name: string;
  email: string | undefined;
  isMiniProfile: boolean;
  hideMiniProfile: () => void;
}
const MiniProfile: React.FC<MiniProfileProps> = ({
  name,
  email,
  hideMiniProfile,
}) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser() as any);
    localStorage.removeItem("user");
  };
  return (
    <div onClick={hideMiniProfile}>
      <img src={ProfilePic} alt="profile" width={50} />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <Link to={RoutePaths.MY_ACCOUNT}>My Account</Link>
      <Link to={RoutePaths.LOGIN} onClick={handleLogOut}>
        Sign Out
      </Link>
    </div>
  );
};

export default MiniProfile;
