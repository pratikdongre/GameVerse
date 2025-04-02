import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <ClientOnly fallback={<Skeleton boxSize="8"></Skeleton>}>
        <IconButton onClick={toggleColorMode}>
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
    </HStack>
  );
}

export default NavBar;
