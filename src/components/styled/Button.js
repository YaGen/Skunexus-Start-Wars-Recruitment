import { Button } from "rebass";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled(Button).attrs((props) => ({
  px: props.small ? "5px" : "15px",
  py: props.small ? "5px" : "15px",
}))`
  border-radius: 0;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  cursor: pointer;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.color || "inherit"};
  color: white;
  fill: white;

  &:hover {
    background-color: #fff;
    color: black;
    fill: ${(props) => props.color || "inherit"};
  }
`;

StyledBtn.propTypes = {
  small: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default StyledBtn;
