import { useSelector } from "react-redux";
import { RootState } from "../../store";

import EditForm from "../../components/EditForm/EditForm";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

import studentImg from "../../assets/images/student-profile-img.png";

import RoutePaths from "../../constants/routes";

const EditProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="edit">
      <Breadcrumb
        links={[RoutePaths.MY_ACCOUNT, RoutePaths.EDIT_PROFILE]}
        labels={["My Account", "Edit Profile"]}
      />
      <h2>My Account</h2>
      <h3>Edit Profile</h3>
      <div className="edit__header">
        <img src={user.photo ? user.photo : studentImg} alt="" width={100} />
        <h5>Upload your photo</h5>
        <ImageUpload />
      </div>
      <EditForm />
    </div>
  );
};

export default EditProfile;
