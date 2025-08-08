import type { ComponentProps, FC } from "react";
import { cn } from "../utils/cn";
import DotSvg from "@assets/svg/dot.svg?react";
import LockedSvg from "@assets/svg/locked.svg?react";

type InputProps = { title: string } & ComponentProps<"input">;
export const Input: FC<InputProps> = ({ className, title, ...props }) => {
  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <h6 className="text-end w-[40%]">{title}</h6>
      <div className="flex items-center w-[60%]">
        <input
          {...props}
          className="w-full bg-background-secondary px-[8px] py-[4px] rounded-[5px] border border-border drop-shadow-[0px_2px_0px_#343433] outline-none caret-accent text-[0.9rem]"
        />
        <LockedSvg />
        <DotSvg />
      </div>
    </div>
  );
};
