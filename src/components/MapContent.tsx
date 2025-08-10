import {
  MapContainer,
  TileLayer,
  Rectangle,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { type FC, useState } from "react";
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

const SearchControl: FC<{ onSelect: (coords: LatLngExpression) => void }> = ({
  onSelect,
}) => {
  const [query, setQuery] = useState("");
  const [_, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        onSelect([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Ничего не найдено");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="absolute top-0 left-0  w-full z-[1000] bg-card-bg px-3 py-0.5"
    >
      <input
        type="text"
        value={query}
        placeholder="Search place"
        onChange={(e) => setQuery(e.target.value)}
        className="w-[200px] bg-background-secondary px-[8px] py-[2px] rounded-[5px] border border-border drop-shadow-[0px_2px_0px_#343433] outline-none caret-accent text-[0.9rem]"
      />
    </form>
  );
};

export const MapContent: FC<MapContentProps> = (props) => {
  const mapStyle = useMapStore((state) => state.layerStyle);
  const [marker, setMarker] = useState<LatLngExpression | null>(null);

  const FlyToMarker: FC<{ coords: LatLngExpression }> = ({ coords }) => {
    const map = useMap();
    map.flyTo(coords, 14);
    return null;
  };

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

        <SearchControl onSelect={(coords) => setMarker(coords)} />

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

        {marker && (
          <>
            <Marker position={marker}>
              <Popup>Найденное место</Popup>
            </Marker>
            <FlyToMarker coords={marker} />
          </>
        )}
      </MapContainer>
    </div>
  );
};
