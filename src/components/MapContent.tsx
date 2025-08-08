import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression } from "leaflet";
import { type FC } from "react";
import type { BoundsType } from "@shared/types/types";
import { SquareSelector } from "./SquareSelector";
import { TILE_LAYERS } from "@shared/constants/tileLayers";
import { useMapStore } from "../shared/stores/map";
import { cn } from "../shared/utils/cn";

type MapContentProps = {
  className?: string;
  bounds: BoundsType | null;
  drawMode: boolean;
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  setMapLocked: (state: boolean) => void;
};

export const MapContent: FC<MapContentProps> = (props) => {
  const mapStyle = useMapStore((state) => state.layerStyle);

  return (
    <div
      className={cn(
        "w-full h-full rounded-lg overflow-hidden",
        props.className
      )}
    >
      <MapContainer
        center={[55.751244, 37.618423]}
        zoom={10}
        className="w-full h-full block"
      >
        <TileLayer
          attribution={TILE_LAYERS[mapStyle].attribution}
          url={TILE_LAYERS[mapStyle].url}
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
              color: TILE_LAYERS[mapStyle].selectionColor,
              weight: 2,
              fillColor: TILE_LAYERS[mapStyle].selectionColor,
              fillOpacity: 0.2,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};
