import React, { useState } from "react";

import "./styles.scss";

const MapContainer = ({ src, title }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
//TODO Do fadeout for loader and add spinner
  return (
    <div className="mapContainer">
      {!isMapLoaded ? <div className="mapContainer__loader"><span>Loading map...</span></div> : null}
      <iframe title={title} src={src} className={`mapContainer__map ${isMapLoaded && "mapContainer__map--show"}`}
              onLoad={() => setIsMapLoaded(true)}/>
    </div>
  );
};

export default MapContainer;
