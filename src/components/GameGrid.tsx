import React, { useState, useEffect } from "react";
import api from "../services/api-client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          
        ))}
      </ul> */}
      <SimpleGrid columns={{ lg: 3, sm: 1, md: 2 }} gap="40px" padding="40px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
