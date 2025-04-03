import React from "react";
import useGenre from "../hooks/useGenre";
function GenreList() {
  const { genre, error } = useGenre();

  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
