import type { ComponentProps, FC } from "react";
import { Card } from "./Card";
import DownarrowHitSvg from "@assets/svg/downarrow_hlt.svg?react";
import GripSvg from "@assets/svg/grip.svg?react";
import { cn } from "@shared/utils/cn";

type BlenderCardProps = {
  title: string;
  cardClassName?: string;
} & ComponentProps<typeof Card>;
export const BlenderCard: FC<BlenderCardProps> = ({
  title,
  children,
  className,
  cardClassName,
  ...props
}) => {
  return (
    <Card
      {...props}
      bgColor="foreground"
      className={cn(
        "flex flex-col items-start justify-start gap-3 pt-0.5",
        cardClassName
      )}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <DownarrowHitSvg />
          <h6>{title}</h6>
        </div>
        <GripSvg />
      </div>
      <div className={cn("w-full flex gap-3 flex-col", className)}>
        {children}
      </div>
    </Card>
  );
};
