import { isCurrency } from "@/utils/isCurrency";
import { Info } from "../Icon/icons";
import { FC } from "react";


interface IWalletList {
  label: string;
  amount: number
}

const WalletList: FC<IWalletList> = ({ label, amount }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <Info className="w-5 h-5" />
      </div>


      <p className="font-bold text-[28px]">USD {isCurrency(amount)}</p>
    </div>
  )
}

export default WalletList