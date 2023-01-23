/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { mainUrls } from "../api/dataRoutes";
import LocationCard from "./locationCard";
import InfiniteItems from "./InfiniteItems";

const InfiniteLocations = ({currentPage, setCurrentPage}) => {
    return <InfiniteItems baseUrl={mainUrls.locations} createChild={(location) => <LocationCard location={location} key={location.id}/>} currentPage={currentPage} setCurrentPage={setCurrentPage}></InfiniteItems>;
}

export default InfiniteLocations;