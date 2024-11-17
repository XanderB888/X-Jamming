import React, {useState} from "react";
import "./searchBar.css";

function SearchBar () {

    return (
        <>
            <div className="searchBar">
                <div className="search-box">
                    <input type="text " 
                    placeholder="Searchbar component..." 
                    id="search-box-inner" />
                </div>
            </div>
        </>
    );     
}

export default SearchBar;
