import { useState } from "react";
import "./PlatformSelector.css";
import { Box } from "@chakra-ui/react";
import { ColorMode, useColorMode } from "./ui/color-mode";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({
  isOpen,
  onToggle,
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, error } = usePlatform();
  const { colorMode } = useColorMode();

  if (error) return null;

  const buttonStyle = {
    backgroundColor: colorMode === "light" ? "#e4e4e7" : "rgb(39, 39, 42",
    color: colorMode === "light" ? "black" : "white",
  };

  const borderStyle = {
    borderColor: colorMode === "light" ? "black" : "white",
  };
  return (
    <Box className="dropdown">
      <div className="fix">
        <button className="fullButton" onClick={onToggle} style={buttonStyle}>
          {selectedPlatform ? (
            <span>{selectedPlatform.name}</span>
          ) : (
            <span>Platforms</span>
          )}
          <i className="arrow down" style={borderStyle}></i>
        </button>

        {isOpen && (
          <ul className="dropdown-menu" style={buttonStyle} onClick={onToggle}>
            {/* <li>PC</li>
            <li>PlayStation</li>
            <li>Xbox</li> */}
            {data.map((platform) => (
              <li
                className="limenu"
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Box>
  );
}

export default PlatformSelector;
