import React from 'react';

function SearchButton (props) {

    return (
        <div>
            <button type="button" id="search-button" onClick={props.onClick}>Search Spotify</button>
        </div>
    );
}

export default SearchButton;