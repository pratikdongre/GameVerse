import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxW="sm" overflow="hidden" borderRadius="15px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
