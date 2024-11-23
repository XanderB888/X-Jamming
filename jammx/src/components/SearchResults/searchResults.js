import React, {useState} from "react";
import "./searchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
    return (
        <>
            <div className="searchResults">
                <h2>Search Results</h2>
                <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        </>
    );     
}

export default SearchResults;