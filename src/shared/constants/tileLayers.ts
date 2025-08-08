export const TILE_LAYERS = {
  standard: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    selectionColor: "#ffffff",
  },
  cartoDarkMatter: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    url: "https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    selectionColor: "#ffffff",
  },
  cartoVoyager: {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    url: "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    selectionColor: "#000000",
  },
  cartoPositron: {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    selectionColor: "#000000",
  },
} as const;
