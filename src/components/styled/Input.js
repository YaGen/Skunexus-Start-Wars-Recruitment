import PropTypes from "prop-types";
import styled from "styled-components";
import { Input as RInput, Select as RSelect } from "@rebass/forms";

const Input = styled((props) => (
  <RInput
    mt={4}
    {...props}
    ref={
      props.register &&
      props.register({
        required: props.required,
      })
    }
  />
))`
  border: none !important;
  border-bottom: 1px solid #000 !important;
  outline: none;
`;

Input.propTypes = {
  register: PropTypes.func,
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

export const Select = (props) => {
  return (
    <RSelect
      {...props}
      mt={4}
      name={props.name}
      sx={{
        borderRadius: 0,
        border: "none",
        borderBottom: "1px solid",
      }}
      required={!!props.required}
    >
      {props.options.map((option, index) => (
        <option
          value={typeof option.value === "string" ? option.value : option}
          key={index}
        >
          {option.txt || option}
        </option>
      ))}
    </RSelect>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array,
};
