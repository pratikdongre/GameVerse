import { Input, InputGroup } from "@chakra-ui/react";
import React, { useRef } from "react";
// import { BsSearch } from "react-icons/bs";
import { Search } from "lucide-react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const formStyle = {
    width: "100%",
  };

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={formStyle}
      onSubmit={(event) => {
        event.preventDefault();
        // console.log(event.target);
        if (ref.current) {
          onSearch(ref.current?.value);
        }
      }}
    >
      <InputGroup startElement={(<Search />) as React.ReactElement}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
        ></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
