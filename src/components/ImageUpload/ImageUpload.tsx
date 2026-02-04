import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../store/services";
import { RootState } from "../../store";
import { addPhotoAsync } from "../../store/users/thunk";
import { IMAGE_UPLOAD } from "../../constants/text-constants";

const ImageUpload: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const token = localStorage.getItem("token") || "";

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    dispatch(
      addPhotoAsync(
        user.ID,
        { ...user, photo: `${baseURL}/uploads/${selectedFile.name}` },
        formData,
        token,
      ) as any,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="file-upload" className="custom-file-upload">
        {IMAGE_UPLOAD.label}
      </label>
      <input type="file" id="file-upload" onChange={handleFileChange} />
      <button type="submit">{IMAGE_UPLOAD.button}</button>
    </form>
  );
};

export default ImageUpload;
