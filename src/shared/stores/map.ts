import { create } from "zustand";
import type { TILE_LAYERS } from "../constants/tileLayers";

type MapState = {
  layerStyle: keyof typeof TILE_LAYERS;
  setStyle: (style: keyof typeof TILE_LAYERS) => void;
};

export const useMapStore = create<MapState>((set) => ({
  layerStyle: "cartoDarkMatter",
  setStyle: (style) => set(() => ({ layerStyle: style })),
}));
