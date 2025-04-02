import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main" bg="pink">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
