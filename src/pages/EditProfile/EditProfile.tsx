import EditForm from "../../components/EditForm/EditForm";
import studentImg from "../../assets/images/student-profile-img.png";

const EditProfile: React.FC = () => {
  return (
    <div>
      <h3>Edit Profile</h3>
      <div style={{ display: "flex" }}>
        <img src={studentImg} alt="" width={100} />
        <h4>Upload your photo</h4>
      </div>
      <EditForm />
    </div>
  );
};

export default EditProfile;
