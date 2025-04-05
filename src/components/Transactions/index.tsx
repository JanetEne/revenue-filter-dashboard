import { useGetUserTransactions } from "@/lib/hooks/transactions";
import { Button } from "../Button";
import Filter from "../Filter";
import { Export, InomingTransaction, OutgoingTransaction } from "../Icon/icons";
import { Separator } from "../Separator";
import { ITransactions } from "@/lib/interface/transactions";
import { format } from "date-fns";
import { capitalize } from "lodash";
import { cn } from "@/utils/cn";

const Transactions = () => {
  const { data } = useGetUserTransactions();

  const renderTransactionIcon = (type: string) => (
    type === "deposit" 
      ? <InomingTransaction className="w-12 h-12" /> 
      : <OutgoingTransaction className="w-12 h-12" />
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
        <p className={cn("font-medium text-sm", {
          "text-success-green": transaction.status === "successful",
          "text-pending": transaction.status === "pending",
        })}>
          {capitalize(transaction.status)}
        </p>
      );
    }
    return "----";
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary font-bold text-2xl">
            {data?.length} Transactions
          </p>
          <p className="text-gray-400 font-medium text-sm">
            Your transactions for the last 7 days
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
        {data?.map((transaction: ITransactions, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Transactions;