import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge paddingX={2} color={color} fontSize="14px" borderRadius="4px">
      {score}{" "}
    </Badge>
  );
}

export default CriticScore;
