import React, {useState} from "react";

function SearchBar () {
    return (
        <>
            <div className="searchBarHeading">
                <input type="text " placeholder="Searchbar component..." />
                <button type="button">Submit</button>
            </div>
        </>
    );     
}

export default SearchBar;
