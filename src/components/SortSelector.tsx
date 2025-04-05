import { useState } from "react";
import styles from "./SortSelector.module.css";
import { Box } from "@chakra-ui/react";
import { ColorMode, useColorMode } from "./ui/color-mode";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  isOpenSort: boolean;
  onToggle: () => void;
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({
  isOpenSort,
  onToggle,
  onSelectSortOrder,
  sortOrder,
}: Props) {
  const { colorMode } = useColorMode();
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");

  const buttonStyle = {
    backgroundColor: colorMode === "light" ? "#e4e4e7" : "rgb(39, 39, 42",
    color: colorMode === "light" ? "black" : "white",
  };

  const borderStyle = {
    borderColor: colorMode === "light" ? "black" : "white",
  };

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const handleSelect = (item: { value: string; label: string }) => {
    setSelectedSortLabel(item.label);
    onSelectSortOrder(item.value);
  };

  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder);
  return (
    <div className={styles.row}>
      <Box className={styles.dropdown}>
        <div className={styles.fix}>
          <button
            className={styles.fullButton}
            onClick={onToggle}
            style={buttonStyle}
          >
            <span>Order By : {currentSortOrder?.label || "Relevance"}</span>
            {/* <span>Order By : {selectedSortLabel}</span> */}

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
              {/* <li>Relevance</li>
              <li>Date Added</li>
              <li>Name</li>
              <li>Release Data</li>
              <li>Popularity</li>
              <li>Average Rating</li> */}

              {sortOrders.map((item) => (
                <li
                  onClick={() => handleSelect(item)}
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Box>
    </div>
  );
}

export default SortSelector;
