import { useEffect, useState } from "react";
import api from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchGames = async () => {
      try {
        const response = await api.get<FetchGameResponse>("/games", { signal });
        console.log(response.data.results);
        setGames(response.data.results);
        setIsLoading(false);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchGames();

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
}

export default useGames;
