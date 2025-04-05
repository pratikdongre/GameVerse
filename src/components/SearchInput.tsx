import { Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search Games..."></Input>
    </InputGroup>
  );
}

export default SearchInput;
