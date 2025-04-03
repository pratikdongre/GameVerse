import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function SkeletonCard() {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius="15px">
      {/* // <Card.Root> */}
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card.Root>
  );
}

export default SkeletonCard;
