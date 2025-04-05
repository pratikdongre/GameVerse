import { useState } from "react";
import styles from "./SortSelector.module.css";
import { Box } from "@chakra-ui/react";
import { ColorMode, useColorMode } from "./ui/color-mode";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  isOpenSort: boolean;
  onToggle: () => void;
}

function SortSelector({ isOpenSort, onToggle }: Props) {
  const { colorMode } = useColorMode();

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
            <span>Order By : Relevance</span>
            <i
              className={`${styles.arrow} ${styles.down}`}
              style={borderStyle}
            ></i>
          </button>

          {isOpenSort && (
            <ul
              className={styles["dropdown-menu"]}
              style={buttonStyle}
              onClick={onToggle}
            >
              <li>Relevance</li>
              <li>Date Added</li>
              <li>Name</li>
              <li>Release Data</li>
              <li>Popularity</li>
              <li>Average Rating</li>
            </ul>
          )}
        </div>
      </Box>
    </div>
  );
}

export default SortSelector;
