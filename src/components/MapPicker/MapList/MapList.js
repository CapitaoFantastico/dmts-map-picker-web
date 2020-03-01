import React, { useState } from "react";
import "./MapList.css";
import MapItem from "./MapItem/MapItem";

const MapList = () => {
  const [selectedMaps, setSelectedMap] = useState([]);
  const maps = [
    {
      map_name: "de_dust2",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 1"
    },
    {
      map_name: "de_mirage",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 2"
    },
    {
      map_name: "de_cache",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    },
    {
      map_name: "de_inferno",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    },
    {
      map_name: "de_overpass",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    },
    {
      map_name: "de_nuke",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    },
    {
      map_name: "de_rialto",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    },
    {
      map_name: "de_dust",
      map_url:
        "https://static.planetminecraft.com/files/resource_media/screenshot/1629/110367418.jpg",
      map_description: "Mapa 3"
    }
  ];

  const handleSelect = (map_name, toggleMap) => {
    if (!selectedMaps.includes(map_name)) {
      setSelectedMap([...selectedMaps, map_name]);

      if ([...selectedMaps, map_name].length === maps.length - 1) {
        // simplificar isso aqui
        const pick = maps
          .filter(function(item) {
            return ![...selectedMaps, map_name].includes(item.map_name);
          })
          .map(map => map.map_name);
        console.log("Mapa selecionado: ", pick[0]);
      }
    }
  };
  return (
    <div className="mapList">
      <ul>
        {maps.map(map => (
          <MapItem
            key={map.map_name}
            map_name={map.map_name}
            map_url={map.map_url}
            map_description={map.map_url}
            mapSelected={handleSelect}
          />
        ))}
      </ul>
      <div className="chat"></div>
    </div>
  );
};

export default MapList;
