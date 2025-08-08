import type { TILE_LAYERS } from "@/src/shared/constants/tileLayers";
import { useMapStore } from "@/src/shared/stores/map";
import { BlenderCard } from "@/src/shared/ui/BlenderCard";
import { Selector, type OptionType } from "@/src/shared/ui/Select";
import type { FC } from "react";

const OPTIONS: OptionType<keyof typeof TILE_LAYERS>[] = [
  {
    id: 1,
    title: "Dark Matter",
    value: "cartoDarkMatter",
  },
  {
    id: 2,
    title: "Positron",
    value: "cartoPositron",
  },
  {
    id: 3,
    title: "Standrd",
    value: "standard",
  },
];

export const MapStyles: FC = () => {
  const mapStyle = useMapStore((state) => state.layerStyle);
  const setLayerStyle = useMapStore((state) => state.setStyle);

  return (
    <BlenderCard title="Map style">
      <Selector
        options={OPTIONS}
        value={mapStyle}
        onSelect={(option) => setLayerStyle(option.value)}
      />
    </BlenderCard>
  );
};
