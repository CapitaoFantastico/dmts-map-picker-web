import React from "react";
import "./MapList.css";
import MapItem from "../MapItem/MapItem";

const MapList = () => {
  const handleSelect = (map_id, toggleMap) => {
    console.log("Mapa clicado: ", map_id);
    console.log("Ativo? ", toggleMap);
  };
  return (
    <div className="picker">
      <MapItem
        map_id="1"
        map_url="https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg"
        map_description="Descrição de uma imagem"
        mapSelected={handleSelect}
      />
      <MapItem
        map_id="2"
        map_url="https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg"
        map_description="Descrição de uma imagem"
        mapSelected={handleSelect}
      />
    </div>
  );
};

export default MapList;
