import React, {useState} from "react";
import "./searchBar.css";

const SearchBar = () => {

    return (
        <>
            <div className="searchBar">
                <div className="search-box">
                    <input placeholder="Searchbar component..." id="search-box-inner" />
                    <button className="SearchButton">
                        Search
                    </button>
                </div>
            </div>
        </>
    );     
}

export default SearchBar;
