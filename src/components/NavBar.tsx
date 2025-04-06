import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
// import { FaMoon, FaSun } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import api from "../services/api-client";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>

      <SearchInput onSearch={onSearch}></SearchInput>
      <ClientOnly fallback={<Skeleton boxSize="8"></Skeleton>}>
        {/* during ssr if fallbacks to skeleton and during and shows colormode only when 
        the code is running on client side  */}
        <HStack>
          <Text whiteSpace={"nowrap"}>
            {colorMode === "light" ? "Light Mode" : "Dark Mode"}
          </Text>

          <IconButton onClick={toggleColorMode} size="sm">
            {colorMode === "light" ? <Sun /> : <Moon />}
          </IconButton>
        </HStack>
      </ClientOnly>
    </HStack>
  );
}

export default NavBar;
