import { cn } from "@shared/utils/cn";

export type OptionType<T> = {
  id: string | number;
  title: string;
  value: T;
};

type SelectorProps<T> = {
  options: OptionType<T>[];
  value: OptionType<T>["value"];
  onSelect: (option: OptionType<T>) => void;
};
export const Selector = <T,>(props: SelectorProps<T>) => {
  return (
    <div className="w-full flex">
      {props.options.map((option, index) => (
        <SelectItem
          key={`select=item-${option.id}`}
          option={option}
          isActive={option.value === props.value}
          isFirst={index === 0}
          isLast={props.options.length - 1 === index}
          onClick={props.onSelect}
        />
      ))}
    </div>
  );
};

type SelectItemProps<T> = {
  option: OptionType<T>;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onClick: (option: OptionType<T>) => void;
};
const SelectItem = <T,>(props: SelectItemProps<T>) => {
  return (
    <button
      className={cn(
        "bg-foreground !rounded-none w-full",
        props.isActive && "!bg-accent",
        props.isFirst && "!rounded-l-[5px]",
        props.isLast && "!rounded-r-[5px]"
      )}
      onClick={() => props.onClick(props.option)}
    >
      {props.option.title}
    </button>
  );
};
