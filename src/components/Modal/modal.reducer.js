import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/ActionTypes";

export const initialState = {
  modal: null,
};

const planetsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case OPEN_MODAL: {
      return { modal: payload };
    }
    case CLOSE_MODAL:
      return { modal: null };
    default:
      return state;
  }
};

export default planetsReducer;
