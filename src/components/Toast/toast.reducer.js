import { SHOW_TOAST, CLOSE_TOAST } from "../../constants/ActionTypes";

export const initialState = {
  toast: null,
};

const toastReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHOW_TOAST: {
      return { toast: payload };
    }
    case CLOSE_TOAST:
      return { toast: null };
    default:
      return state;
  }
};

export default toastReducer;
