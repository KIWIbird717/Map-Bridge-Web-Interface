import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression } from "leaflet";
import { type FC } from "react";
import type { BoundsType } from "../types/types";
import { SquareSelector } from "./SquareSelector";

type MapContentProps = {
  bounds: BoundsType | null;
  drawMode: boolean;
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  setMapLocked: (state: boolean) => void;
};

export const MapContent: FC<MapContentProps> = (props) => {
  return (
    <MapContainer
      center={[55.751244, 37.618423]}
      zoom={10}
      style={{
        height: "100%",
        width: "100%",
        margin: "0 auto",
        display: "block",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SquareSelector
        onBoundsChange={props.setBounds}
        enabled={props.drawMode}
        onFinish={() => props.setDrawMode(false)}
        lockMap={() => props.setMapLocked(true)}
        unlockMap={() => props.setMapLocked(false)}
      />
      {props.bounds && (
        <Rectangle
          bounds={props.bounds as LatLngBoundsExpression}
          pathOptions={{
            color: "#ff0000",
            weight: 3,
            fillColor: "#ff6666",
            fillOpacity: 0.2,
          }}
        />
      )}
    </MapContainer>
  );
};
