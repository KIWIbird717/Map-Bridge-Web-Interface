import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const variants = tv({
  base: "w-full",
  variants: {
    bgColor: {
      default: "bg-card-bg rounded-lg px-4 py-2",
      foreground: "bg-card-bg-secondary rounded-md p-3",
    },
  },
  defaultVariants: {
    bgColor: "default",
  },
});

type CardProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof variants>;

export const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={variants({
        className: props.className,
        bgColor: props.bgColor,
      })}
    >
      {props.children}
    </div>
  );
};
