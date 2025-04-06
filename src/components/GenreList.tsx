import React from "react";
// import useGenre from "../hooks/useGenre";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  //   if (isLoading) return <Spinner></Spinner>

  return (
    <>
      <Heading fontSize="2xl" marginY={1}>
        Genres
      </Heading>
      <List.Root listStyleType={"none"}>
        {isLoading ? (
          <Spinner color="pink.400" size="lg" />
        ) : (
          data.map((genre) => (
            <ListItem key={genre.id}>
              <HStack marginY={2}>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  variant="plain"
                  textDecoration="underline"
                  fontSize="15px"
                  padding={1}
                  fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectedGenre(genre)}
                >
                  <Text whiteSpace="normal" textAlign="left">
                    {genre.name}
                  </Text>
                </Button>
              </HStack>
            </ListItem>
          ))
        )}
      </List.Root>
    </>
  );
}

export default GenreList;
