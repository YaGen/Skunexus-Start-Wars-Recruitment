import { Flex, Text } from "rebass";
import Link from "../Link";

const NavBar = () => {
  return (
    <Flex py={2} px={4} color="white" bg="black" alignItems="center">
      <Link to="/">
        <Text p={2} fontWeight="bold" color="#fff">
          Star Wars Planets App
        </Text>
      </Link>
    </Flex>
  );
};

export default NavBar;
