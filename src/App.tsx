import "leaflet/dist/leaflet.css";
import { useState, type FC } from "react";
import type { BoundsType } from "./types/types";
import { MapContent } from "./components/MapContent";
import { Card } from "./shared/ui/Card";
import { BlenderCard } from "./shared/ui/BlenderCard";

const Header: FC = () => {
  return (
    <BlenderCard title="Header" className="gap-3 flex items-center">
      <img
        src="./images/logo.png"
        alt="Map Bridge Logo"
        className="w-[80px] h-[80px]"
      />
      <div className="flex flex-col gap-1">
        <h3>Map Bridge</h3>
        <h6>Aria selection for blender addon</h6>
      </div>
    </BlenderCard>
  );
};

const Panel: FC = () => {
  return (
    <Card className="h-full max-w-[500px] min-w-[500px] w-[500px]">
      <Header />
    </Card>
  );
};

function App() {
  const [bounds, setBounds] = useState<BoundsType | null>(null);
  const [drawMode, setDrawMode] = useState(false);
  const [mapLocked, setMapLocked] = useState(false);

  return (
    <main className="flex max-w-screen max-h-screen overflow-hidden w-screen h-screen p-1 gap-1">
      {/* <div style={{ height: "100vh", width: "100vw", zIndex: 1 }}>
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
        </div> */}

      <MapContent
        bounds={bounds}
        drawMode={drawMode}
        setBounds={setBounds}
        setDrawMode={setDrawMode}
        setMapLocked={setMapLocked}
      />
      <Panel />

      {/* <div style={{ textAlign: "center", marginTop: 20 }}>
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
      </div> */}
      {/* </div> */}
    </main>
  );
}

export default App;
