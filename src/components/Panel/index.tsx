import { type FC } from "react";
import { Card } from "@shared/ui/Card";
import type { BoundsType } from "@shared/types/types";
import { MapStyles } from "./MapStyles";
import { SelectAria } from "./SelectAria";

type PanelProps = {
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  drawMode: boolean;
  bounds: BoundsType | null;
};
export const Panel: FC<PanelProps> = (props) => {
  return (
    <Card className="h-full w-full flex flex-col gap-1">
      <MapStyles />
      <SelectAria
        setBounds={props.setBounds}
        setDrawMode={props.setDrawMode}
        drawMode={props.drawMode}
        bounds={props.bounds}
      />
    </Card>
  );
};
