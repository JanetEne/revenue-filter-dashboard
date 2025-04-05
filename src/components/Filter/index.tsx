import { Button } from "../Button"
import { ExpandMore } from "../Icon/icons"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../Sheet"


const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="secondary"
        >
          <p className="font-bold text-base">Filter</p>
          <ExpandMore className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Filter