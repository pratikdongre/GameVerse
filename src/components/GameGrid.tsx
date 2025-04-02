import React, { useState, useEffect } from "react";
import api from "../services/api-client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get<FetchGameResponse>("/games");
        console.log(response.data.results);
        setGames(response.data.results);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
