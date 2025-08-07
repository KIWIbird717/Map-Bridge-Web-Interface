import { Rectangle, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { useState, useEffect, type FC } from "react";

type SquareSelectorProps = {
  onBoundsChange: (bounds: number[][] | null) => void;
  enabled: boolean;
  onFinish: () => void;
  lockMap: () => void;
  unlockMap: () => void;
};

export const SquareSelector: FC<SquareSelectorProps> = (props) => {
  const [start, setStart] = useState<LatLngExpression | null>(null);
  const [end, setEnd] = useState<LatLngExpression | null>(null);
  const [dragging, setDragging] = useState(false);
  const map = useMap();

  useEffect(() => {
    if (props.enabled) {
      map.dragging.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      props.lockMap();
    } else {
      map.dragging.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
      props.unlockMap();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.enabled]);

  useMapEvents({
    mousedown(e) {
      if (!props.enabled) return;
      setStart([e.latlng.lat, e.latlng.lng]);
      setEnd([e.latlng.lat, e.latlng.lng]);
      setDragging(true);
    },
    mousemove(e) {
      if (!props.enabled) return;
      if (dragging && start) {
        setEnd([e.latlng.lat, e.latlng.lng]);
      }
    },
    mouseup() {
      if (!props.enabled) return;
      setDragging(false);
      if (start && end) {
        const bounds: number[][] = [
          [
            Math.min((start as number[])[0], (end as number[])[0]),
            Math.min((start as number[])[1], (end as number[])[1]),
          ],
          [
            Math.max((start as number[])[0], (end as number[])[0]),
            Math.max((start as number[])[1], (end as number[])[1]),
          ],
        ];
        props.onBoundsChange(bounds);
        props.onFinish();
        setStart(null);
        setEnd(null);
      }
    },
  });

  let bounds: number[][] | null = null;
  if (start && end) {
    bounds = [
      [
        Math.min((start as number[])[0], (end as number[])[0]),
        Math.min((start as number[])[1], (end as number[])[1]),
      ],
      [
        Math.max((start as number[])[0], (end as number[])[0]),
        Math.max((start as number[])[1], (end as number[])[1]),
      ],
    ];
  }

  return bounds ? (
    <Rectangle
      bounds={bounds as LatLngBoundsExpression}
      pathOptions={{
        color: "#ff0000",
        weight: 3,
        fillColor: "#ff6666",
        fillOpacity: 0.2,
      }}
    />
  ) : null;
};
