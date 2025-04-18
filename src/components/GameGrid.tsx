import React, { useState, useEffect } from "react";
import api from "../services/api-client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import useData from "../hooks/useData";

import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

// interface Props {
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
// }

interface Props {
  gameQuery: GameQuery;
}

// function GameGrid({ selectedGenre, selectedPlatform }: Props) {
function GameGrid({ gameQuery }: Props) {
  // const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  {
    /* <ul>
        {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          
        ))}
      </ul> */
  }
  return (
    <SimpleGrid
      columns={{ lg: 3, sm: 1, md: 2, "2xl": 4 }}
      gap="30px"
      padding="40px"
      paddingLeft={0}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <SkeletonCard key={skeleton}></SkeletonCard>
        ))}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
