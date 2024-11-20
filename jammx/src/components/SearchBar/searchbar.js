import React, {useCallback, useState} from "react";
import "./searchBar.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="searchBar">  
            <input placeholder="Enter a Song Title" onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>
                Search
            </button>
            
        </div>
    );     
}

export default SearchBar;
