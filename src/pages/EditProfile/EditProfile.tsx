import { useSelector } from "react-redux";
import { RootState } from "../../store";

import EditForm from "../../components/EditForm/EditForm";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

import studentImg from "../../assets/images/student-profile-img.png";

import RoutePaths from "../../constants/routes";
import { EDIT_PROFILE } from "../../constants/text-constants";
import { useState } from "react";

const EditProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <div className="edit">
      <Breadcrumb
        links={[RoutePaths.MY_ACCOUNT, RoutePaths.EDIT_PROFILE]}
        labels={["My Account", "Edit Profile"]}
      />
      <h2>{EDIT_PROFILE.heading}</h2>
      <h3>{EDIT_PROFILE.subheading}</h3>
      <div className="edit__header">
        {preview && <img src={preview} alt="Preview" width={100} />}
        {!preview && (
          <img src={user.photo ? user.photo : studentImg} alt="" width={100} />
        )}
        <h5>{EDIT_PROFILE.upload}</h5>
        <p>{EDIT_PROFILE.text}</p>
        <ImageUpload preview={preview} setPreview={setPreview} />
      </div>
      <EditForm />
    </div>
  );
};

export default EditProfile;
