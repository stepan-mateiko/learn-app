import Input from "../Input/Input";
import Button from "../Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";

const EditProfile: React.FC = () => {
  return (
    <div>
      <h3>Edit Profile</h3>
      <div style={{ display: "flex" }}>
        <img src={studentImg} alt="" />
        <h4>Upload your photo</h4>
      </div>
      <form action="#" method="post">
        <Input
          type="text"
          label="First name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="text"
          label="Last name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="text"
          label="User name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="date"
          label="Date of birth"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="text"
          label="Address"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="email"
          label="Email"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="checkbox"
          label="Active"
          value={true}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <div>
          <Button buttonText="Cancel" />
          <Button buttonText="Save changes" isSubmit={true} />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
