import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { addPhotoAsync } from "../../store/users/thunk";
import { IMAGE_UPLOAD } from "../../constants/text-constants";
import { ImageUploadProps } from "../../constants/props";

const ImageUpload: React.FC<ImageUploadProps> = ({ preview, setPreview }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const token = localStorage.getItem("token") || "";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    dispatch(addPhotoAsync(user.ID, user, formData, token) as any);
    setPreview(null);
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
