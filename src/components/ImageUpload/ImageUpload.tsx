import React, { useState, ChangeEvent, FormEvent } from "react";
import { baseURL } from "../../store/services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addPhotoAsync } from "../../store/users/thunk";

const ImageUpload: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    dispatch(
      addPhotoAsync(
        user.ID,
        { ...user, photo: `${baseURL}/uploads/${selectedFile.name}` },
        formData,
        user.token
      ) as any
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;
