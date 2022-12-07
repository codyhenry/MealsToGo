import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
  position: absolute;
  z-index: 999;
  ${StatusBar.currentHeight ? `top:${StatusBar.currentHeight}px` : `top:44px`}
  width: 100%;
`;

export const Search = () => {
  //destructure keyword and search props from locationContext
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //when the search changes on the restaurant screen, update it here
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
