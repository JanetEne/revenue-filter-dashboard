import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useState } from 'react';
import { ChevronDown } from '../Icon/icons';

dayjs.extend(advancedFormat);

interface CalendarProps {
  selectedDate?: dayjs.Dayjs | null;
  onDateSelect: (date: dayjs.Dayjs) => void;
}

const Calendar = ({ selectedDate, onDateSelect }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs>(
    dayjs().startOf('month')
  );

  const handleDateClick = (date: dayjs.Dayjs) => {
    onDateSelect(date);
  };

  const handleMonthChange = (offset: number) => {
    setCurrentMonth(currentMonth.add(offset, 'month'));
  };

  const renderCalendar = (month: dayjs.Dayjs) => {
    const daysInMonth = month.daysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) =>
      month.startOf('month').add(index, 'day')
    );

    const firstDayOfWeek = month.startOf('month').day();

    return (
      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => handleMonthChange(-1)} className="p-1">
            <ChevronDown className='w-[20px] h-[20px] rotate-90' />
          </button>
          <span className="font-semibold text-primary">
            {month.format('MMMM, YYYY')}
          </span>
          <button onClick={() => handleMonthChange(1)} className="p-1">
            <ChevronDown className='w-[20px] h-[20px] -rotate-90' />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4 text-center mt-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <small key={day} className="font-semibold text-primary">
              {day}
            </small>
          ))}
          {Array.from({ length: firstDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2"></div>
          ))}
          {days.map((day, index) => {
            const isSelected = selectedDate && day.isSame(selectedDate, 'day');

            return (
              <small
                key={index}
                onClick={() => handleDateClick(day)}
                className={`p-2 rounded-full cursor-pointer
                    ${isSelected ? 'bg-primary text-white' : ''}
                  `}
              >
                {day.format('D')}
              </small>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center rounded-xl mx-auto shadow-lg mb-2 text-sm w-full font-body">
      {renderCalendar(currentMonth)}
    </div>
  );
};

export default Calendar;