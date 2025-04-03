import React from "react";
// import useGenre from "../hooks/useGenre";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

function GenreList() {
  const { data } = useGenre();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
