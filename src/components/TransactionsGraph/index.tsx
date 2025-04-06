import { useGetUserTransactions } from "@/lib/hooks/transactions";
import { useGetUserWallet } from "@/lib/hooks/wallet";
import { useAppSelector } from "@/lib/store/storeHooks";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, subDays, subMonths, subYears, startOfMonth, startOfYear, eachDayOfInterval } from "date-fns";
import { ITransactions } from "@/lib/interface/transactions";

interface ChartDataPoint {
  date: string;
  balance: number;
}

const BalanceGraph = () => {
  const { data: transactions } = useGetUserTransactions();
  const { data: walletData } = useGetUserWallet();
  const filterState = useAppSelector((state) => state.filter);

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
        startDate = transactions?.length
          ? new Date(transactions[0].date)
          : subDays(today, 30);
        break;
    }

    return { startDate, endDate: today };
  };

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

  startDate = new Date("2022-02-20");
  endDate = new Date("2022-03-03");


  const filteredTransactions = transactions?.filter((transaction: ITransactions) => {
    const transactionDate = transaction.date ? new Date(transaction.date) : null;
    if (transactionDate) {
      if (startDate && transactionDate < startDate) return false;
      if (endDate && transactionDate > endDate) return false;
    }
    return true;
  });

  const sortedTransactions: ITransactions[] | undefined = filteredTransactions?.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const chartData: ChartDataPoint[] = [];
  let balance = walletData?.balance ?? 0;

  if (!sortedTransactions || sortedTransactions.length === 0) {
    const defaultStartDate = startDate || subDays(new Date(), 30);
    const defaultEndDate = endDate || new Date();

    const dateRange = eachDayOfInterval({
      start: defaultStartDate,
      end: defaultEndDate,
    });

    dateRange.forEach((day) => {
      const dayString = format(day, "yyyy-MM-dd");
      chartData.push({
        date: dayString,
        balance,
      });
    });
  } else {
    const dateRange = eachDayOfInterval({
      start: startDate || new Date(sortedTransactions[0].date),
      end: endDate || new Date(),
    });

    let transactionIndex = 0;

    dateRange.forEach((day) => {
      const dayString = format(day, "yyyy-MM-dd");

      while (
        transactionIndex < sortedTransactions.length &&
        format(new Date(sortedTransactions[transactionIndex].date), "yyyy-MM-dd") === dayString
      ) {
        const transaction = sortedTransactions[transactionIndex];
        if (transaction.type === "deposit") {
          balance += transaction.amount;
        } else if (transaction.type === "withdrawal") {
          balance -= transaction.amount;
        }
        transactionIndex++;
      }

      chartData.push({
        date: dayString,
        balance,
      });
    });
  }

  const CustomTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <circle cx={0} cy={0} r={4} fill="#E5E7EB" />
        <text x={0} y={20} dy={0} textAnchor="middle" fill="#6B7280" fontSize={12}>
          {payload.value}
        </text>
      </g>
    );
  };

  const ticks = chartData.length > 0 
    ? [chartData[0].date, chartData[chartData.length - 1].date]
    : [startDate?.toISOString().split("T")[0], endDate?.toISOString().split("T")[0]];

  return (
    <div className="w-full h-[300px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis
            dataKey="date"
            tickFormatter={(date) => format(new Date(date), "yyyy-MM-dd")}
            ticks={ticks}
            tick={CustomTick}
            stroke="#E5E7EB"
            axisLine={{ stroke: "#E5E7EB", strokeWidth: 1 }}
          />
          <YAxis hide={true} />
          <Tooltip
            formatter={(value: number) => `USD ${value.toLocaleString()}`}
            labelFormatter={(label) => format(new Date(label), "yyyy-MM-dd")}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#FF6F61"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceGraph;
