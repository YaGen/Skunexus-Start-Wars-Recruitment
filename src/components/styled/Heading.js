import styled from "styled-components";
import { Heading } from "rebass";

const BaseHeading = styled(Heading)`
  line-height: 1.25;
  align-self: flex-start;
  font-family: inherit;
  position: relative;
  text-align: unset;
  font-weight: bold;
`;

const H1 = styled(BaseHeading).attrs({
  my: 4,
})`
  font-size: 30px;
`;

const H2 = styled(BaseHeading).attrs({
  my: 2,
})`
  font-size: 24px;
`;

export { H1, H2 };

export default BaseHeading;
