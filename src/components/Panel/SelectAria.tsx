import { type FC } from "react";
import { BlenderCard } from "@shared/ui/BlenderCard";
import type { BoundsType } from "@shared/types/types";
import { Button } from "@shared/ui/Button";
import ObjectDatamodeSvg from "@assets/svg/object_datamode.svg?react";
import TrashSvg from "@assets/svg/trash.svg?react";
import InfoSvg from "@assets/svg/info.svg?react";
import { Input } from "@shared/ui/Input";
import CopyDownSvg from "@assets/svg/copy_down.svg?react";

type SelectAriaProps = {
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  drawMode: boolean;
  bounds: BoundsType | null;
};
export const SelectAria: FC<SelectAriaProps> = (props) => {
  return (
    <BlenderCard title="Select aria">
      <div className="flex">
        <Button
          onClick={() => props.setDrawMode(true)}
          icon={<ObjectDatamodeSvg />}
          className="!rounded-r-none"
        >
          Select aria
        </Button>
        <Button
          onClick={() => {
            props.setBounds(null);
            props.setDrawMode(false);
          }}
          icon={<TrashSvg />}
          className="!rounded-l-none"
        >
          Clear
        </Button>
      </div>
      {props.drawMode && !props.bounds && (
        <div className="flex items-center gap-1">
          <InfoSvg />
          <h6>Select aria to import on map</h6>
        </div>
      )}
      {props.bounds && (
        <>
          <div className="flex flex-col">
            <Input
              title="SouthWest"
              value={`${props.bounds?.[0][0].toFixed(
                6
              )}, ${props.bounds?.[0][1].toFixed(6)}`}
            />
            <Input
              title="NorthEast"
              value={`${props.bounds?.[1][0].toFixed(
                6
              )}, ${props.bounds?.[1][1].toFixed(6)}`}
            />
          </div>
          <Button icon={<CopyDownSvg />}>Copy</Button>
        </>
      )}
    </BlenderCard>
  );
};
