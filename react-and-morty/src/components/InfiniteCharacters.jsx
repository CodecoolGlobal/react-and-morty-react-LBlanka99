/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { mainUrls } from "../api/dataRoutes";
import CharacterCard from "./characterCard";
import InfiniteItems from "./InfiniteItems";

/**
 * We tried merging this component with `InfiniteLocations` but we couldn't.
 */
const InfiniteCharacters = ({currentPage, setCurrentPage}) => {
    return <InfiniteItems baseUrl={mainUrls.characters} createChild={(character) => <CharacterCard character={character} key={character.id} />} currentPage={currentPage} setCurrentPage={setCurrentPage}></InfiniteItems>;
}

export default InfiniteCharacters;