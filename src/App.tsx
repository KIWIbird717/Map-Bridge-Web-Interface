import { useState, type FC } from "react";
import { MapContent } from "./components/MapContent";
import type { BoundsType } from "./shared/types/types";
import { Panel } from "./components/Panel";
import { HeaderCard } from "./components/HeaderCard";

const App: FC = () => {
  const [bounds, setBounds] = useState<BoundsType | null>(null);
  const [drawMode, setDrawMode] = useState(false);
  const [_, setMapLocked] = useState(false);

  return (
    <main className="flex max-w-screen max-h-screen overflow-hidden w-screen h-screen p-1 gap-1">
      <MapContent
        className={drawMode ? "cursor-crosshair" : "cursor-default"}
        bounds={bounds}
        drawMode={drawMode}
        setBounds={setBounds}
        setDrawMode={setDrawMode}
        setMapLocked={setMapLocked}
      />
      <section className="max-w-[400px] min-w-[400px] w-[400px]">
        <HeaderCard className="mb-1" />
        <Panel
          setBounds={setBounds}
          setDrawMode={setDrawMode}
          drawMode={drawMode}
          bounds={bounds}
        />
      </section>
    </main>
  );
};

export default App;
