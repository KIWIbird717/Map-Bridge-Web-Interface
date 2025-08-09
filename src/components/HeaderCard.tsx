import URLSvg from "@assets/svg/URL.svg?react";
import { cn } from "@shared/utils/cn";
import type { FC } from "react";
import { LinkedButton } from "../shared/ui/LinkedButton";

type HeaderCardProps = {
  className?: string;
};
export const HeaderCard: FC<HeaderCardProps> = (props) => {
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
