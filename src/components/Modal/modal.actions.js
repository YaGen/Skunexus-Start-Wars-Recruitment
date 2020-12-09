import actionCreator from "../../utils/actionCreator";

import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/ActionTypes";
import { EDIT_PLANET_MODAL } from "../../constants/ModalTypes";
import { showToast } from "../Toast/toast.actions";

export const openModal = (type, data) => ({
  type: OPEN_MODAL,
  payload: { type, data },
});

export const openEditPlanetModal = (data) => {
  return {
    type: OPEN_MODAL,
    payload: { type: EDIT_PLANET_MODAL, data },
  };
};

export const closeModal = actionCreator(CLOSE_MODAL);

export const submitEditPlanetModal = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(closeModal());
      dispatch(showToast("Planet details has successfully changed."));
    }, 2000);
  };
};
