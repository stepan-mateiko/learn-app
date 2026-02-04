import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";

import Button from "../Button/Button";

import RoutePaths from "../../constants/routes";
import { ModalBoxProps } from "../../constants/props";

import { deleteUserAsync } from "../../store/users/thunk";
import { MODAL_BOX } from "../../constants/text-constants";

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
      <h3>{MODAL_BOX.heading}</h3>
      <p>{MODAL_BOX.paragraph1} </p>
      <p>{MODAL_BOX.paragraph2}</p>
      <p>{MODAL_BOX.paragraph3}</p>
      <div className="delete__btns">
        <Button onClick={handleModalClose} buttonText="Cancel" />
        <Button buttonText="Confirm" onClick={deleteAccount} />
      </div>
    </ReactModal>
  );
};
export default ModalBox;
