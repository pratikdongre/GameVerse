import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import api from "../services/api-client";

function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>

      <ClientOnly fallback={<Skeleton boxSize="8"></Skeleton>}>
        <HStack>
          <Text>{colorMode === "light" ? "Light Mode" : "Dark Mode"}</Text>

          <IconButton onClick={toggleColorMode} size="sm">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </HStack>
      </ClientOnly>

     
    </HStack>
  );
}

export default NavBar;
