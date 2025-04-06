import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Button } from "../Button";
import { ChevronDown } from "../Icon/icons";
import { Checkbox } from "../Checkbox";
import { cn } from "@/utils/cn";

interface MultiSelectProps {
  options: string[];
  value: string[] | undefined;
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select options",
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOption = (option: string) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (currentValues.includes(option)) {
      onChange(currentValues.filter((v) => v !== option));
    } else {
      onChange([...currentValues, option]);
    }
  };

  const displayValue = Array.isArray(value) && value.length > 0 ? value.join(", ") : placeholder;

  return (
    <Popover onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant={open ? 'outline' : 'secondary'}
          className={cn("justify-between text-sm font-normal rounded-lg", { 'text-primary': open })}
        >
          <span className="truncate">{displayValue}</span>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        className="mt-2 w-full rounded-2xl bg-white p-4 shadow-lg w-[var(--radix-popover-trigger-width)]"
      >
        <div className="max-h-60 overflow-y-auto space-y-4">
          {options.map((option) => {
            const selected = Array.isArray(value) && value.includes(option);
            return (
              <div key={option} className="flex gap-4 items-center">
                <Checkbox onCheckedChange={() => toggleOption(option)} checked={selected} />
                <span className="font-medium text-base font-body">{option}</span>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
