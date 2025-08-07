import "leaflet/dist/leaflet.css";
import { useState, type FC } from "react";
import "./styles/App.css";
import type { BoundsType } from "./types/types";
import { MapContent } from "./components/MapContent";

const Panel: FC = () => {
  return <div></div>;
};

function App() {
  const [bounds, setBounds] = useState<BoundsType | null>(null);
  const [drawMode, setDrawMode] = useState(false);
  const [mapLocked, setMapLocked] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <button
          className={drawMode ? "draw-btn active" : "draw-btn"}
          onClick={() => setDrawMode((v) => !v)}
          disabled={mapLocked}
        >
          ⬛ Выделить квадрат
        </button>
        <button
          className="draw-btn"
          onClick={() => setBounds(null)}
          disabled={drawMode}
        >
          Очистить
        </button>
      </div>

      <MapContent
        bounds={bounds}
        drawMode={drawMode}
        setBounds={setBounds}
        setDrawMode={setDrawMode}
        setMapLocked={setMapLocked}
      />

      <div style={{ textAlign: "center", marginTop: 20 }}>
        {bounds ? (
          <div>
            <strong>Selected area coordinates:</strong>
            <div>
              SouthWest: {bounds[0][0].toFixed(6)}, {bounds[0][1].toFixed(6)}
            </div>
            <div>
              NorthEast: {bounds[1][0].toFixed(6)}, {bounds[1][1].toFixed(6)}
            </div>
          </div>
        ) : (
          <div>No area selected</div>
        )}
      </div>
    </div>
  );
}

export default App;
