import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

// import { Game } from "../hooks/useGames";
import { Game } from "../hooks/useGames";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // console.log("Rating Top:", game.rating_top);

  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius="15px">
      {/* // <Card.Root> */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        {/* {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}

        <HStack justify={"space-between"} marginBottom={4}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
