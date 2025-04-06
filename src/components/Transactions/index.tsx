import { useGetUserTransactions } from "@/lib/hooks/transactions";
import { Button } from "../Button";
import Filter from "../Filter";
import { EmptyState, Export, InomingTransaction, OutgoingTransaction } from "../Icon/icons";
import { Separator } from "../Separator";
import { ITransactions } from "@/lib/interface/transactions";
import { format, subDays, subMonths, subYears, startOfMonth, startOfYear } from "date-fns";
import { capitalize } from "lodash";
import { cn } from "@/utils/cn";
import { useAppDispatch, useAppSelector } from "@/lib/store/storeHooks";
import { resetFilters } from "@/lib/store/reducerSlices/filterTransactions";

const Transactions = () => {
  const { data } = useGetUserTransactions();
  const filterState = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const getDateRangeFromDuration = (duration: string) => {
    const today = new Date();
    let startDate: Date | null = null;

    switch (duration) {
      case "Today":
        startDate = today;
        break;
      case "Last 7 days":
        startDate = subDays(today, 7);
        break;
      case "This month":
        startDate = startOfMonth(today);
        break;
      case "Last 3 months":
        startDate = subMonths(today, 3);
        break;
      case "This year":
        startDate = startOfYear(today);
        break;
      case "Last year":
        startDate = subYears(today, 1);
        break;
      case "All time":
      default:
        startDate = null;
        break;
    }

    return { startDate, endDate: today };
  };

  const filteredTransactions = data?.filter((transaction: ITransactions) => {
    const transactionDate = transaction.date ? new Date(transaction.date) : null;

    if (
      filterState.transactionType.length > 0 &&
      !filterState.transactionType.includes(transaction.type)
    ) {
      return false;
    }

    if (
      filterState.transactionStatus.length > 0 &&
      !filterState.transactionStatus.includes(transaction.status)
    ) {
      return false;
    }

    let startDate: Date | null = null;
    let endDate: Date | null = null;

    if (filterState.startDate || filterState.endDate) {
      startDate = filterState.startDate ? new Date(filterState.startDate) : null;
      endDate = filterState.endDate ? new Date(filterState.endDate) : null;
    } else {
      const { startDate: durationStart, endDate: durationEnd } = getDateRangeFromDuration(
        filterState.duration
      );
      startDate = durationStart;
      endDate = durationEnd;
    }

    if (transactionDate) {
      if (startDate && transactionDate < startDate) {
        return false;
      }
      if (endDate && transactionDate > endDate) {
        return false;
      }
    }

    return true;
  });

  const renderTransactionIcon = (type: string) => (
    type === "deposit" ? (
      <InomingTransaction className="w-12 h-12" />
    ) : (
      <OutgoingTransaction className="w-12 h-12" />
    )
  );

  const renderTransactionName = (transaction: ITransactions) => {
    if (transaction.metadata?.product_name) {
      return <p className="text-base font-medium">{transaction.metadata.product_name}</p>;
    }
    return <p>{transaction.type === "deposit" ? "Cash deposit" : "Cash withdrawal"}</p>;
  };

  const renderTransactionDetails = (transaction: ITransactions) => {
    if (transaction.metadata?.name) {
      return <p className="text-sm font-medium text-gray-400">{transaction.metadata.name}</p>;
    }
    if (transaction.status) {
      return (
        <p
          className={cn("font-medium text-sm", {
            "text-success-green": transaction.status === "successful",
            "text-pending": transaction.status === "pending",
          })}
        >
          {capitalize(transaction.status)}
        </p>
      );
    }
    return "----";
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary font-bold text-2xl">
            {filteredTransactions?.length || 0} Transactions
          </p>
          <p className="text-gray-400 font-medium text-sm">
            Your transactions for {capitalize(filterState.duration)}
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <Filter />
          <Button variant="secondary">
            <p className="font-semibold text-base">Export List</p>
            <Export className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-8">
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction: ITransactions, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                {renderTransactionIcon(transaction.type)}
                <div>
                  {renderTransactionName(transaction)}
                  {renderTransactionDetails(transaction)}
                </div>
              </div>

              <div className="text-right">
                <p className="text-base font-bold">USD {transaction.amount}</p>
                <p className="text-sm font-medium text-gray-400">
                  {transaction.date &&
                    format(new Date(transaction.date), "MMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col justify-start items-center pt-10 pb-30">
            <div className="flex flex-col items-start space-y-5">
              <EmptyState className="w-12 h-12" />

              <p className="text-primary font-bold text-[28px]">
                No matching transactions found<br /> for the selected filter
              </p>
              <p className="text-gray-400 font-medium text-base">
                Change your filters to see more results, or add a new <br /> product
              </p>

              <Button variant="secondary" onClick={handleClearFilters}>
                Clear Filter
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
