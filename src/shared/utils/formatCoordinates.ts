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
