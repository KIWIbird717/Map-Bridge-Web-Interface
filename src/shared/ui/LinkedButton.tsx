import type { FC, ReactNode } from "react";

type LinkedButtonProps = {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
};
export const LinkedButton: FC<LinkedButtonProps> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="hover:bg-foreground rounded-md px-1 h-[23px] flex items-center gap-1"
    >
      {props.icon}
      {props.children}
    </a>
  );
};
