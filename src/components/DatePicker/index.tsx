import * as React from 'react';
import { format } from 'date-fns';
import { ChevronDown } from '../Icon/icons';
import { cn } from '@/utils/cn';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

interface DatePickerProps {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
}

export function DatePicker({ date, onDateChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    onDateChange(selectedDate);
    setOpen(false);
  };

  return (
    <Popover onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={open ? 'outline' : 'secondary'}
          className={cn(
            'w-full justify-between text-left font-normal rounded-lg h-10 px-3',
            !date && 'text-muted-foreground',
            open && 'text-primary'
          )}
        >
          {date ? format(date, 'dd MMM yyyy') : <span>Pick a date</span>}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-white rounded-2xl shadow-lg"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          className="p-6 font-body"
        />
      </PopoverContent>
    </Popover>
  );
}
