import { useState, type FC, type ReactNode } from "react";
import { BlenderCard } from "@shared/ui/BlenderCard";
import type { BoundsType } from "@shared/types/types";
import { Button } from "@shared/ui/Button";
import ObjectDatamodeSvg from "@assets/svg/object_datamode.svg?react";
import TrashSvg from "@assets/svg/trash.svg?react";
import InfoSvg from "@assets/svg/info.svg?react";
import { Input } from "@shared/ui/Input";
import CopyDownSvg from "@assets/svg/copy_down.svg?react";
import { Field } from "@/src/shared/ui/Field";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import {
  boundsToBboxLike,
  calculateArea,
} from "@/src/shared/utils/formatCoordinates";

type InfoLineProps = {
  children: ReactNode;
};
const InfoLine: FC<InfoLineProps> = (props) => {
  return (
    <div className="flex items-center gap-1">
      <InfoSvg />
      <h6>{props.children}</h6>
    </div>
  );
};

type SelectAriaProps = {
  setBounds: (state: BoundsType | null) => void;
  setDrawMode: (state: boolean) => void;
  drawMode: boolean;
  bounds: BoundsType | null;
};
export const SelectAria: FC<SelectAriaProps> = (props) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [isCopiedInfoVisible, setIsCopiedInfoVisible] = useState(false);

  const handleCopy = () => {
    if (!props.bounds) return;
    const formattedCoordinates = boundsToBboxLike(props.bounds);
    copyToClipboard(formattedCoordinates);
    setIsCopiedInfoVisible(true);
    setTimeout(() => {
      setIsCopiedInfoVisible(false);
    }, 3000);
  };

  const area = props.bounds ? calculateArea(props.bounds) : 0;

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
        <InfoLine>Select aria to import on map</InfoLine>
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
            <Field title="Aria size" value={`${area.toFixed(2)} km²`} />
          </div>
          <div className="flex flex-col">
            <Button onClick={handleCopy} icon={<CopyDownSvg />}>
              Copy
            </Button>
            {isCopiedInfoVisible && <InfoLine>Copied to clipboard</InfoLine>}
          </div>
        </>
      )}
    </BlenderCard>
  );
};
