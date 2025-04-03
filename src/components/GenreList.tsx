import React from "react";
// import useGenre from "../hooks/useGenre";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data } = useGenre();

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginY={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="17px">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GenreList;
