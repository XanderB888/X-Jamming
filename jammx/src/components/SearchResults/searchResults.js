import React, {useState} from "react";
import "./searchResults.css";

function SearchResults (props) {
    return (
        <>
            <div className="searchResults">
                <div id="searchOutput"><h3>{props.songName}</h3></div>
            </div>
        </>
    );     
}

export default SearchResults;