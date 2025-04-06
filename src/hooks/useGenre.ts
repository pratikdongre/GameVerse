import useData from "./useData";
import genre from "../data/genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenre() {
  // return useData<Genre>("/genres");
  return { data: genre, isLoading: false, error: null };
}

export default useGenre;
