import type { ComponentProps, FC } from "react";
import { Card } from "./Card";
import DownarrowHitSvg from "@assets/svg/downarrow_hlt.svg?react";
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
        "flex flex-col items-start justify-start gap-2",
        cardClassName
      )}
    >
      <div className="flex items-center">
        <DownarrowHitSvg />
        <h6>{title}</h6>
      </div>
      <div className={cn("", className)}>{children}</div>
    </Card>
  );
};
