import React from "react";
// import useGenre from "../hooks/useGenre";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  //   if (isLoading) return <Spinner></Spinner>

  return (
    <List.Root>
      {isLoading ? (
        <Spinner color="pink.400" size="lg" />
      ) : (
        data.map((genre) => (
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
        ))
      )}
    </List.Root>
  );
}

export default GenreList;
