import React, { useState, useEffect } from "react";
import api from "../services/api-client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import useData from "../hooks/useData";

import useGames from "../hooks/useGames";
function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          
        ))}
      </ul> */}

      <SimpleGrid columns={{ lg: 3, sm: 1, md: 2 }} gap="40px" padding="40px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <SkeletonCard key={skeleton}></SkeletonCard>
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
