import { useEffect, useState } from "react";
import api from "../services/api-client";
import { CanceledError } from "axios";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchGames = async () => {
      try {
        const response = await api.get<FetchGameResponse>("/games", { signal });
        console.log(response.data.results);
        setGames(response.data.results);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        console.error(err);
        setError(err.message);
      }
    };

    fetchGames();

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
}

export default useGames;
