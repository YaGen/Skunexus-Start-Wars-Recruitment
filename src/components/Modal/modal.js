import { Flex } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

import EditPlanet from "./modals/EditPlanet";
import { EDIT_PLANET_MODAL } from "../../constants/ModalTypes";

const ModalContainerWrapper = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled(Flex).attrs({
  p: 4,
  width: 1,
  justifyContent: "center",
})`
  position: relative;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  margin: auto;
  width: 700px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const CloseIcon = styled.span`
  color: #000;
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  return (
    <ModalContainerWrapper>
      <ModalContainer>
        <CloseIcon onClick={closeModal}>X</CloseIcon>
        {modal.type === EDIT_PLANET_MODAL && <EditPlanet data={modal.data} />}
      </ModalContainer>
    </ModalContainerWrapper>
  );
};

Modal.propTypes = {
  modal: PropTypes.object,
  closeModal: PropTypes.func,
};

export default Modal;
