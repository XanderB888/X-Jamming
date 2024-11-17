import React, {useState} from "react";
import './styles/App.css';
import SearchBar from "../src/components/searchbar";
import SearchResults from "./components/searchResults";
import SearchButton from "./components/searchButton";


function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchButton />
      <SearchResults songName="Random song name - replace with song selected"/>
    </div>
  );
}

export default App;
