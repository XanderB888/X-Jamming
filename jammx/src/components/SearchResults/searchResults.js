import React, {useState} from "react";
import "./searchResults.css";
import TrackList from "../TrackList/tracklist";

const SearchResults = (props) => {
    return (
        <>
            <div className="searchResults">
                <h3>Results</h3>
                {/* <Tracklist tracks={props.searchResults} onAdd={props.onAdd} /> */}
            </div>
        </>
    );     
}

export default SearchResults;