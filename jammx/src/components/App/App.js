import React, {useState} from "react";
import './App.css';
import SearchBar from "../SearchBar/searchbar";
import SearchResults from "../SearchResults/searchResults";


function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults songName="Random song name - replace with song selected"/>
    </div>
  );
}

export default App;
