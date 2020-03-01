import React, { useState } from "react";
import "./MapItem.css";

const MapItem = map => {
  const { map_name, map_url, map_description, mapSelected } = map;
  const [toggleMap, setToggleMap] = useState(false);

  function handleClick() {
    setToggleMap(!toggleMap);
    mapSelected(map_name, !toggleMap);
  }
  return (
    <div className="mapItem">
      <header>
        <img
          className={toggleMap ? "disableItem" : null}
          src={map_url}
          alt={map_description}
          onClick={handleClick}
        ></img>
      </header>
    </div>
  );
};

export default MapItem;
