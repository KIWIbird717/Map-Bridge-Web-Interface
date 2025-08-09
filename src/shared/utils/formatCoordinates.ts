import type { BoundsType } from "../types/types";

/**
 * format coordinates to bbox like
 * formatCoordinates(bounds) -> "{minLongitude},{minLatitude},{maxLongitude},{maxLatitude}"
 */
export function boundsToBboxLike(bounds: BoundsType) {
  const [minLongitude, minLatitude] = [
    bounds[1][1].toFixed(6),
    bounds[1][0].toFixed(6),
  ];
  const [maxLongitude, maxLatitude] = [
    bounds[0][1].toFixed(6),
    bounds[0][0].toFixed(6),
  ];

  return `${minLongitude},${minLatitude},${maxLongitude},${maxLatitude}`;
}

const R = 6371; // Earth's radius in kilometers;

/**
 * Calculate area of selected bounds in square kilometers
 * Uses Haversine formula for accurate distance calculation
 */
export function calculateArea(bounds: BoundsType): number {
  const [southWest, northEast] = bounds;
  const [minLat, minLng] = southWest;
  const [maxLat, maxLng] = northEast;

  // Convert degrees to radians
  const lat1Rad = (minLat * Math.PI) / 180;
  const deltaLatRad = ((maxLat - minLat) * Math.PI) / 180;
  const deltaLngRad = ((maxLng - minLng) * Math.PI) / 180;

  // Calculate width (longitude difference)
  const width = R * Math.cos(lat1Rad) * deltaLngRad;

  // Calculate height (latitude difference)
  const height = R * deltaLatRad;

  // Calculate area
  const area = width * height;

  return Math.abs(area);
}
