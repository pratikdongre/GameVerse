import { useEffect, useState } from "react";
import api from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

function useGenre() {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchGenre = async () => {
      try {
        const response = await api.get<FetchGenreResponse>("/genres", {
          signal,
        });
        console.log(response.data.results);
        setGenre(response.data.results);
        setIsLoading(false);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        console.error(err);
        setIsLoading(false);
        setError(err.message);
      }
    };
    fetchGenre();
    return () => {
      controller.abort();
    };
  }, []);

  return { genre, error, isLoading };
}

export default useGenre;
