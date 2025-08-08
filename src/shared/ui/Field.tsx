import type { FC, ReactNode } from "react";
import { cn } from "../utils/cn";
import DotSvg from "@assets/svg/dot.svg?react";
import LockedSvg from "@assets/svg/locked.svg?react";

type FieldProps = { title: string; value: ReactNode; className?: string };
export const Field: FC<FieldProps> = ({ className, title, value }) => {
  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <h6 className="text-end w-[40%]">{title}</h6>
      <div className="flex items-center w-[60%]">
        <h6 className="w-full flex items-center justify-center bg-foreground px-[8px] py-[4px] rounded-[5px] cursor-col-resize">
          {value}
        </h6>
        <LockedSvg />
        <DotSvg />
      </div>
    </div>
  );
};
