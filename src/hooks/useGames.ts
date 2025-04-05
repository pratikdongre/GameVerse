import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// function useGames(
//   selectedGenre: Genre | null,
//   selectedPlatform: Platform | null
function useGames(gameQuery: GameQuery) {
  // return useData<Game>(
  //   "/games",
  //   { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
  //   [selectedGenre?.id, selectedPlatform?.id]
  // );

  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    // [gameQuery.genre?.id, gameQuery.platform?.id] or
    [gameQuery]
  );
}

export default useGames;
