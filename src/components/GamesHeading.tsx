import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GamesHeading({ gameQuery }: Props) {
  return (
    <Heading as="h1" fontSize={40} marginY={4}>
      {gameQuery.platform?.name} {gameQuery.genre?.name}
    </Heading>
  );
}

export default GamesHeading;
