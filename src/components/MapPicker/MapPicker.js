import React from "react";
import "./MapPicker.css";
import MapList from "./MapList/MapList";
import TeamArea from "../TeamArea/TeamArea";

const MapPicker = () => {
  return (
    <div className="row">
      <div className="column left">
        <TeamArea name="Counter Terrorist" />
      </div>
      <div className="column middle">
        <MapList />
      </div>
      <div className="column right">
        <TeamArea name="Terrorist" />
      </div>
    </div>
  );
};

export default MapPicker;
