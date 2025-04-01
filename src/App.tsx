import { useState } from "react";
import "./App.css";
import { Button, HStack, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <HStack>
      <Button size="xs">Click me</Button>
      <Button colorPalette="white" bgColor="blue" variant="outline">
        Click me
      </Button>
    </HStack>
  );
}

export default App;
