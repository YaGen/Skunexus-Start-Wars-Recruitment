import { connect } from "react-redux";

import Modal from "./modal";
import { closeModal } from "./modal.actions";

const mapStateToProps = ({ modal: modalState }) => ({
  modal: modalState.modal,
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
