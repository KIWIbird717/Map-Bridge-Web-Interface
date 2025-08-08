import { useState, type FC, type ReactNode } from "react";
import { MapContent } from "./components/MapContent";
import type { BoundsType } from "./shared/types/types";
import { Panel } from "./components/Panel";
import URLSvg from "@assets/svg/URL.svg?react";
import { cn } from "@shared/utils/cn";

type HeaderCardProps = {
  className?: string;
};
const HeaderCard: FC<HeaderCardProps> = (props) => {
  return (
    <div
      className={cn(
        props.className,
        "bg-card-bg rounded-md overflow-hidden block"
      )}
    >
      <img src="./images/preview.png" alt="Preview" />
      <div className="p-6 h-full flex flex-col gap-2">
        <h6 className="text-font/50">Information</h6>
        <LinkedButton icon={<URLSvg />} href="">
          Purchase addon
        </LinkedButton>
      </div>
    </div>
  );
};

type LinkedButtonProps = {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
};
const LinkedButton: FC<LinkedButtonProps> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="hover:bg-foreground rounded-md px-1 h-[23px] flex items-center gap-1"
    >
      {props.icon}
      {props.children}
    </a>
  );
};

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
