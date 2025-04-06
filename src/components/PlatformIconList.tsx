import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWind,
  FaPlay,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
// import { Platform } from "../hooks/useGames";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        <Icon
          as={iconMap[platform.slug] as React.ElementType}
          key={platform.id}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
