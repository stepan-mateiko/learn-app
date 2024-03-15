import { useNavigate } from "react-router-dom";

import ReactModal from "react-modal";
import Button from "../Button/Button";

import RoutePaths from "../../constants/routes";
import { useDispatch } from "react-redux";
import { deleteUserAsync } from "../../store/users/thunk";

interface ModalBoxProps {
  ID: string;
  token: string;
  isModalOpen: boolean;
  handleModalClose: () => void;
}
const ModalBox: React.FC<ModalBoxProps> = ({
  isModalOpen,
  handleModalClose,
  ID,
  token,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteAccount = () => {
    dispatch(deleteUserAsync(ID, token) as any);
    handleModalClose();
    navigate(RoutePaths.LOGIN);
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      style={{ overlay: { zIndex: 10 } }}
      className="delete"
    >
      <h3>Profile Deletion Confirmation</h3>
      <p>
        We're truly sorry to see you go. Before you proceed with deleting your
        profile, we want you to know that this action is permanent and
        irreversible. You'll lose access to all your account information, course
        progress, certificates, and any learning communities you're a part of.
      </p>
      <p>
        If there's anything we can do to improve your experience or if you need
        assistance with any issues you've encountered, please reach out to our
        support team. We're always here to help.
      </p>
      <p>
        If you still wish to delete your account, please click on the 'Confirm'
        button below.
      </p>
      <div className="delete__btns">
        <Button onClick={handleModalClose} buttonText="Cancel" />
        <Button buttonText="Confirm" onClick={deleteAccount} />
      </div>
    </ReactModal>
  );
};
export default ModalBox;
