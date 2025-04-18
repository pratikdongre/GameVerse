import { useState } from "react";
import "./App.css";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { BsSearchHeart } from "react-icons/bs";
import GamesHeading from "./components/GamesHeading";

export interface GameQuery {
  genre: Genre | null;
  open: Boolean;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "160px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem
        area="aside"
        inlineSize="150px"
        padding="10px"
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        ></GenreList>
      </GridItem>

      <GridItem area="main" marginLeft="40px">
        <GamesHeading gameQuery={gameQuery} />
        <div className="selectors">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
            isOpenPlatform={isOpenPlatform}
            onToggle={() => setIsOpenPlatform(!isOpenPlatform)}
          ></PlatformSelector>
          {/* <GameGrid
          selectedPlatform={gameQuery.platform}
          selectedGenre={gameQuery.genre}
        ></GameGrid> */}

          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            isOpenSort={isOpenSort}
            onToggle={() => setIsOpenSort(!isOpenSort)}
          />
        </div>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
