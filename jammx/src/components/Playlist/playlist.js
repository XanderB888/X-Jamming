import React, { useCallback } from "react";

import "../Playlist/playlist.css";

import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    }, 
    [props.onNameChange]
  );

  return (
      <div className="Playlist">
        <input onChange={handleNameChange} defaultValue={"Name Your Playlist"} id="Playlist-name" /> 
        <TrackList 
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
        />
        <button className="Playlist-save" onClick={props.onSave}>
          Save to your Spotify
        </button> 
      </div>
  );
};

export default Playlist;