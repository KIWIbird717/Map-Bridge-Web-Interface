import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression } from "leaflet";
import { type FC } from "react";
import type { BoundsType } from "../types/types";
import { SquareSelector } from "./SquareSelector";
import { TILE_LAYERS } from "@shared/constants/tileLayers";

type MapContentProps = {
  bounds: BoundsType | null;
  drawMode: boolean;
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  setMapLocked: (state: boolean) => void;
};

export const MapContent: FC<MapContentProps> = (props) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={[55.751244, 37.618423]}
        zoom={10}
        className="w-full h-full block"
      >
        <TileLayer
          attribution={TILE_LAYERS.cartoDarkMatter.attribution}
          url={TILE_LAYERS.cartoDarkMatter.url}
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
    </div>
  );
};
