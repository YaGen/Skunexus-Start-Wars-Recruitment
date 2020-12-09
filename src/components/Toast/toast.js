import { Flex } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToastContainer = styled(Flex).attrs({
  py: 2,
  px: 4,
})`
  position: fixed;
  top: 40px;
  right: 40px;
  background-color: #f0c230;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const Toast = ({ toast }) => {
  if (!toast) {
    return null;
  }

  return <ToastContainer>{toast}</ToastContainer>;
};

Toast.propTypes = {
  toast: PropTypes.object,
};

export default Toast;
