import React, { useState } from "react";
import "./MapItem.css";

const MapItem = map => {
  const { map_id, map_url, map_description, mapSelected } = map;
  const [toggleMap, setToggleMap] = useState(false);

  function handleClick() {
    setToggleMap(!toggleMap);
    mapSelected(map_id, !toggleMap);
  }
  return (
    <div className="mapItem">
      <header>
        <img src={map_url} alt={map_description} onClick={handleClick}></img>
      </header>
    </div>
  );
};

export default MapItem;
