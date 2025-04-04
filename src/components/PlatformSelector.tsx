import { useState } from "react";
import styles from "./PlatformSelector.module.css";
import { Box } from "@chakra-ui/react";
import { ColorMode, useColorMode } from "./ui/color-mode";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  isOpenPlatform: boolean;
  onToggle: () => void;
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({
  isOpenPlatform,
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
    <div className={styles.row}>
      <Box className={styles.dropdown}>
        <div className={styles.fix}>
          <button
            className={styles.fullButton}
            onClick={onToggle}
            style={buttonStyle}
          >
            {selectedPlatform ? (
              <span>{selectedPlatform.name}</span>
            ) : (
              <span>Platforms</span>
            )}
            <i
              className={`${styles.arrow} ${styles.down}`}
              style={borderStyle}
            ></i>
          </button>

          {isOpenPlatform && (
            <ul
              className={styles["dropdown-menu"]}
              style={buttonStyle}
              onClick={onToggle}
            >
              {/* <li>PC</li>
            <li>PlayStation</li>
            <li>Xbox</li> */}
              {data.map((platform) => (
                <li
                  className={styles.limenu}
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
    </div>
  );
}

export default PlatformSelector;
