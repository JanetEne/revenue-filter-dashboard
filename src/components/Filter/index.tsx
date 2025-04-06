import { setDateRange, setDuration, setTransactionStatus, setTransactionType } from "@/lib/store/reducerSlices/filterTransactions";
import { useAppDispatch, useAppSelector } from "@/lib/store/storeHooks";
import { Button } from "../Button";
import { DatePicker } from "../DatePicker";
import { ExpandMore } from "../Icon/icons";
import { MultiSelect } from "../Select";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../Sheet";
import { transactionDurationOptions, transactionStatusOptions, transactionTypeOptions } from "@/utils/transactionData";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import { TransactionDuration, IFilterState } from "@/lib/interface/storeState";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filter);
  const [localFilterState, setLocalFilterState] = useState<IFilterState>({
    transactionType: filterState.transactionType,
    transactionStatus: filterState.transactionStatus,
    startDate: filterState.startDate,
    endDate: filterState.endDate,
    duration: filterState.duration,
  });

  const [startDate, setStartDate] = useState<Date | undefined>(
    filterState.startDate ? new Date(filterState.startDate) : undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    filterState.endDate ? new Date(filterState.endDate) : undefined
  );

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date);
    const isoDate = date ? date.toISOString().split("T")[0] : null;
    setLocalFilterState((prev) => ({
      ...prev,
      startDate: isoDate,
      duration: "Custom" as TransactionDuration,
    }));
  };

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date);
    const isoDate = date ? date.toISOString().split("T")[0] : null;
    setLocalFilterState((prev) => ({
      ...prev,
      endDate: isoDate,
      duration: "Custom" as TransactionDuration,
    }));
  };

  const handleTransactionTypeChange = (values: string[]) => {
    setLocalFilterState((prev) => ({
      ...prev,
      transactionType: values,
    }));
  };

  const handleTransactionStatusChange = (values: string[]) => {
    setLocalFilterState((prev) => ({
      ...prev,
      transactionStatus: values,
    }));
  };

  const handleTransactionDurationChange = (value: TransactionDuration) => {
    setLocalFilterState((prev) => ({
      ...prev,
      duration: value,
      startDate: null,
      endDate: null,
    }));
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const handleClear = () => {
    setLocalFilterState({
      transactionType: [],
      transactionStatus: [],
      startDate: null,
      endDate: null,
      duration: "All time",
    });
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const handleApply = () => {
    dispatch(setTransactionType(localFilterState.transactionType));
    dispatch(setTransactionStatus(localFilterState.transactionStatus));
    dispatch(setDuration(localFilterState.duration));
    dispatch(
      setDateRange({
        startDate: localFilterState.startDate,
        endDate: localFilterState.endDate,
      })
    );
    setOpen(false)
  };

  useEffect(() => {
    setLocalFilterState({
      transactionType: filterState.transactionType,
      transactionStatus: filterState.transactionStatus,
      startDate: filterState.startDate,
      endDate: filterState.endDate,
      duration: filterState.duration,
    });
    setStartDate(filterState.startDate ? new Date(filterState.startDate) : undefined);
    setEndDate(filterState.endDate ? new Date(filterState.endDate) : undefined);
  }, [filterState]);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger>
        <Button variant="secondary">
          <p className="font-bold text-base">Filters</p>
          <ExpandMore className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white w-[456px] flex flex-col font-body">
        <div className="flex-1 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
          </SheetHeader>

          <div className="space-y-6">
            <div className="flex overflow-x-auto space-x-4 pb-2 hide-scrollbar">
              {transactionDurationOptions.map((item: TransactionDuration, index) => (
                <div
                  className={cn(
                    "flex-shrink-0 border whitespace-nowrap border-gray rounded-full hover:bg-gray hover:text-primary cursor-pointer py-2 px-4 text-primary",
                    localFilterState.duration === item && "bg-primary text-white",
                    "first:ml-6 last:mr-6"
                  )}
                  key={index}
                  onClick={() => handleTransactionDurationChange(item)}
                >
                  <p className={cn("font-semibold text-sm")}>{item}</p>
                </div>
              ))}
            </div>

            <div className="px-6 space-y-6">
              <div className="space-y-2">
                <p className="text-base font-semibold">Date Range</p>
                <div className="grid lg:grid-cols-2 gap-2">
                  <DatePicker date={startDate} onDateChange={handleStartDateChange} />
                  <DatePicker date={endDate} onDateChange={handleEndDateChange} />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold">Transaction Type</p>
                <MultiSelect
                  options={transactionTypeOptions}
                  value={localFilterState.transactionType}
                  onChange={handleTransactionTypeChange}
                  placeholder="Select transaction types"
                />
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold">Transaction Status</p>
                <MultiSelect
                  options={transactionStatusOptions}
                  value={localFilterState.transactionStatus}
                  onChange={handleTransactionStatusChange}
                  placeholder="Select transaction statuses"
                />
              </div>
            </div>
          </div>
        </div>

        <SheetFooter>
          <div className="flex gap-3 w-full">
            <Button variant="outline" className="w-full text-primary" onClick={handleClear}>
              Clear
            </Button>
            <Button className="w-full" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
