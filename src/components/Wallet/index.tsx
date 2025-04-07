import { useGetUserWallet } from "@/lib/hooks/wallet"
import { isCurrency } from "@/utils/isCurrency"
import WalletList from "../WalletList"
import { Button } from "../Button"
import TransactionGraph from "../TransactionsGraph"

const Wallet = () => {
  const { data } = useGetUserWallet()

  return (
    <div data-testid="wallet-container" className='grid grid-cols-[auto_271px] gap-20 mb-20'>
      <div>
        <div className="w-fit flex gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-gray-400">Available Balance</p>
            <p className="font-bold text-[36px]">USD {isCurrency(data?.balance ?? 0)}</p>
          </div>

          <Button className="w-[180px] h-fit text-base font-semibold">Withdraw</Button>
        </div>
        <TransactionGraph />
      </div>


      <div className="flex flex-col gap-10">
        <WalletList label="Ledger Balance" amount={data?.ledger_balance ?? 0} />

        <WalletList label="Total Payout" amount={data?.total_payout ?? 0} />

        <WalletList label="Total Revenue" amount={data?.total_revenue ?? 0} />

        <WalletList label="Pending Payout" amount={data?.pending_payout ?? 0} />
      </div>

    </div>
  )
}

export default Wallet