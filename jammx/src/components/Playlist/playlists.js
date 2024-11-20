import React, { useCallback } from React;
import "./playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {

    return (
        <div className="Playlist">
          <input defaultValue={"New PLaylist"} /> 
          <TrackList 
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
          />
          <button className="PLaylist-save" onClick={props.onSave}>
            Save to Spotify
          </button> 
        </div>
    );
};

export default Playlist;