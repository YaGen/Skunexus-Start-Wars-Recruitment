import actionCreator from "../../utils/actionCreator";

import { SHOW_TOAST, CLOSE_TOAST } from "../../constants/ActionTypes";

export const showToast = (payload) => {
  return (dispatch) => {
    dispatch({ type: SHOW_TOAST, payload });
    setTimeout(() => {
      dispatch(hideToast());
    }, 2000);
  };
};

export const hideToast = actionCreator(CLOSE_TOAST);
