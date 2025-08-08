import { BlenderCard } from "@/src/shared/ui/BlenderCard";
import type { FC } from "react";

export const Header: FC = () => {
  return (
    <BlenderCard title="Header" className="flex-row items-center">
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
