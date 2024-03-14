import EditForm from "../../components/EditForm/EditForm";
import studentImg from "../../assets/images/student-profile-img.png";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const EditProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="edit">
      <h2>My Account</h2>
      <h3>Edit Profile</h3>
      <div className="edit__header">
        <img src={user.photo ? user.photo : studentImg} alt="" width={100} />
        <h4>Upload your photo</h4>
        <ImageUpload />
      </div>
      <EditForm />
    </div>
  );
};

export default EditProfile;
