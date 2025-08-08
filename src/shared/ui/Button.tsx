import { type ComponentProps, type FC, type ReactNode } from "react";
import { cn } from "../utils/cn";

type ButtonProps = {
  icon?: ReactNode;
} & ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button {...props} className={cn("relative", className)}>
      <div className="absolute left-0 top-0">{icon}</div>
      {children}
    </button>
  );
};
