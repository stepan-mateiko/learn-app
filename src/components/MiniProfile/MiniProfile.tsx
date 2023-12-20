import { Link } from "react-router-dom";

import RoutePaths from "../../constants/routes";
import ProfilePic from "../../assets/images/student-profile-img.png";

interface MiniProfileProps {
  name: string;
  email: string;
  isMiniProfile: boolean;
  hideMiniProfile: () => void;
}
const MiniProfile: React.FC<MiniProfileProps> = ({
  name,
  email,
  hideMiniProfile,
}) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
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
