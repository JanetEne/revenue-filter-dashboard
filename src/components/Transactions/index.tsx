import { Button } from "../Button"
import { ExpandMore, Export } from "../Icon/icons"
import { Separator } from "../Separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../Sheet"


const Transactions = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary font-bold text-[24px]">24 Transactions</p>
          <p className="text-gray-400 font-medium text-sm">Your transactions for the last 7 days</p>
        </div>

        <div className="flex gap-4 items-center">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="secondary"
              >
                <p className="font-semibold text-base">Filter</p>
                <ExpandMore className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Button
            variant="secondary"
          >
            <p className="font-semibold text-base">Export List</p>
            <Export className="w-5 h-5" />
          </Button>
        </div>

      </div>

      <Separator />
    </div>

  )
}

export default Transactions